import Text from "../../ui/typography";
import Button from "../../ui/button";
import type { TaskItemProps } from "../../../types/task";

const TaskItem = ({ task, onToggle, onEdit, onDelete }: TaskItemProps) => {
    return (
        <div className="task-item">

            <div className="task-checkbox-wrapper">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    className="task-checkbox"
                />

                <Text
                    className={`task-text ${task.completed ? "completed" : ""}`}
                    size="md"
                >
                    {task.text}
                </Text>
            </div>

            <div className="task-actions">
                <Button variant="edit" size="sm" onClick={() => onEdit(task)}>
                    Edit
                </Button>
                <Button variant="delete" size="sm" onClick={() => onDelete(task.id)}>
                    Delete
                </Button>
            </div>

        </div>
    );
};

export default TaskItem;
