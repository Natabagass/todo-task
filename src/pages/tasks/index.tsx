import Text from "../../components/ui/typography";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import { useTasks } from "../../hooks/useTasks";
import TaskItem from "../../components/task/list";
import UpdateModalTask from "../../components/task/modal";
import { useLogin } from "../../hooks/useLogin";

const TasksPage = () => {
    const {
        handleCreateTask,
        handleSearch,
        tasksToShow,
        handleDelete,
        newTask,
        setNewTask,
        setSearchQuery,
        handleToggle,
        openEditModal,
        searchInput,
        setSearchInput,
        editingTask,
        closeEditModal,
        editingText,
        setEditingText,
        saveEdit
    } = useTasks()

    const { handleLogout } = useLogin()

    return (
        <>
            <div className="tasks-wrapper">
                <div className="header-bar">
                    <Button onClick={() => handleLogout} size="md" variant="secondary">
                        Logout
                    </Button>
                </div>
                <div className="tasks-header">
                    <Text Type="h2" weight="bold" size="xl2" color="primary">
                        Task Management
                    </Text>
                </div>

                <div className="tasks-controls">
                    <Input
                        placeholder="Search tasks..."
                        value={searchInput}
                        onChange={(e) => {
                            const val = e.target.value;
                            setSearchInput(val);

                            if (val.trim() === "") {
                                setSearchQuery("");
                            }
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                    />

                    <div className="new-task-box">
                        <Input
                            placeholder="Create new task..."
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                        />
                        <Button variant="primary" onClick={handleCreateTask}>
                            + Create
                        </Button>
                    </div>
                </div>

                <div className="tasks-container">
                    {tasksToShow.length === 0 ? (
                        <div className="empty-wrapper">
                            <Text Type="span" className="empty-text">Belum ada task ditemukan</Text>
                        </div>
                    ) : (
                        tasksToShow.map(task => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onToggle={handleToggle}
                                onEdit={openEditModal}
                                onDelete={handleDelete}
                            />
                        ))
                    )}
                </div>
            </div>

            <UpdateModalTask
                closeEditModal={closeEditModal}
                editingTask={editingTask}
                editingText={editingText}
                saveEdit={saveEdit}
                setEditingText={setEditingText}
            />
        </>
    );
};

export default TasksPage;
