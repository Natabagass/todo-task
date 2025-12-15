import { useEffect, useState } from "react";
import type { Task } from "../types/task";

export const useTasks = () => {
    {/* Usestate dengna improve lazy initial untuk menghindari extra re-render dalam React StrictMode */}
    const [tasks, setTasks] = useState<Task[]>(() => {
        const stored = localStorage.getItem("tasks");
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch {
                console.error("Data Belum Ada");
            }
        }
        return [];
    });

    {/* Inisialisasi berbagai state yang akan digunakan */}
    const [searchInput, setSearchInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [newTask, setNewTask] = useState("");

    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [editingText, setEditingText] = useState("");

    {/* Set item tasks yang diambil dari localStorage jikalau ada */}
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    {/* Fungsi create task */}
    const handleCreateTask = () => {
        if (!newTask.trim()) return;

        const newItem: Task = {
            id: Date.now() + Math.random(),
            text: newTask,
            completed: false,
        };

        {/* Combine data lama dan baru dalam 1 array */}
        setTasks([newItem, ...tasks]);
        setNewTask("");
    };

    {/* Fungsi open edit modal dengan memasukkan task serta value yang akan diedit */}
    const openEditModal = (task: Task) => {
        setEditingTask(task);
        setEditingText(task.text);
    };

    {/* Fungsi close modal */}
    const closeEditModal = () => {
        setEditingTask(null);
        setEditingText("");
    };

    {/* Fungsi save edit data update untuk task */}
    const saveEdit = () => {
        if (editingTask && editingText.trim()) {
            setTasks(tasks.map(t =>
                t.id === editingTask.id ? { ...t, text: editingText } : t
            ));
        }
        closeEditModal();
    };

    {/* Fungsi done dan undone untuk per task */}
    const handleToggle = (id: number) => {
        setTasks(tasks.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        ));
    };

    {/* Fungsi delete task */}
    const handleDelete = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    {/* Fungsi search task */}
    const handleSearch= () => {
        if (searchInput.trim() === "") {
            setSearchQuery("");
            return;
        }
        setSearchQuery(searchInput);
    };

    {/* Conditional rendering data task by query */}
    const tasksToShow = searchQuery
        ? tasks.filter(t =>
            t.text.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : tasks;

    return {
        searchInput,
        tasksToShow,
        setSearchInput,
        newTask,
        setNewTask,
        tasks,
        handleSearch,
        handleCreateTask,
        handleDelete,
        handleToggle,
        editingTask,
        setSearchQuery,
        editingText,
        setEditingText,
        openEditModal,
        closeEditModal,
        saveEdit
    };
};
