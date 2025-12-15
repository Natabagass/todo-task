import type { ModalProps } from "../../../types/modal";

const Modal = ({ open, title, children, onClose }: ModalProps) => {
    return (
        <>
            {
                open &&
                <div className="modal-overlay" onClick={onClose}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                        {title && <h3 className="modal-title">{title}</h3>}
                        <div className="modal-content">{children}</div>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;
