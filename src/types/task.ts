export interface Task {
    id: number;
    text: string;
    completed: boolean;
};

export interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
    onEdit: (task: Task) => void;
    onDelete: (id: number) => void;
};