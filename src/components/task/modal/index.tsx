import type { Dispatch, SetStateAction } from "react";
import Button from "../../ui/button";
import Input from "../../ui/input";
import Modal from "../../ui/modal";
import type { Task } from "../../../types/task";

const UpdateModalTask = ({
    editingTask,
    closeEditModal,
    editingText,
    setEditingText,
    saveEdit
}: {
    editingTask: Task | null;
    closeEditModal: () => void;
    editingText: string;
    setEditingText: Dispatch<SetStateAction<string>>;
    saveEdit: () => void;
}) => {
    return (
        <Modal
            open={editingTask !== null}
            title="Edit Task"
            onClose={closeEditModal}
        >
            <Input
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                placeholder="Edit task..."
            />

            {/* Button action save atau cancel edit */}
            <div style={{ marginTop: "12px", display: "flex", gap: "10px" }}>
                <Button variant="primary" onClick={saveEdit}>Save</Button>
                <Button variant="secondary" onClick={closeEditModal}>Cancel</Button>
            </div>
        </Modal>
    );
}

export default UpdateModalTask;