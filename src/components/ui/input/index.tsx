import { type ChangeEvent, type KeyboardEvent } from "react";

type InputProps = {
    label?: string;
    type?: string;
    value: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

const Input = ({ label, onKeyDown, type = "text", value, placeholder, onChange }: InputProps) => {
    return (
        <div className="input-group">
            {label && <label className="input-label">{label}</label>}
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onKeyDown={onKeyDown}
                className="input-field"
            />
        </div>
    );
};

export default Input;
