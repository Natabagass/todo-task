import { useEffect, useState } from "react";
import type { Task } from "../types/task";

export const useTasks = () => {

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

    const [searchInput, setSearchInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [newTask, setNewTask] = useState("");

    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [editingText, setEditingText] = useState("");


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleCreateTask = () => {
        if (!newTask.trim()) return;

        const newItem: Task = {
            id: Date.now(),
            text: newTask,
            completed: false,
        };

        setTasks([newItem, ...tasks]);
        setNewTask("");
    };

    const openEditModal = (task: Task) => {
        setEditingTask(task);
        setEditingText(task.text);
    };

    const closeEditModal = () => {
        setEditingTask(null);
        setEditingText("");
    };

    const saveEdit = () => {
        if (editingTask && editingText.trim()) {
            setTasks(tasks.map(t =>
                t.id === editingTask.id ? { ...t, text: editingText } : t
            ));
        }
        closeEditModal();
    };

    const handleToggle = (id: number) => {
        setTasks(tasks.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        ));
    };

    const handleDelete = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    const handleSearch= () => {
        if (searchInput.trim() === "") {
            setSearchQuery("");
            return;
        }
        setSearchQuery(searchInput);
    };

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
