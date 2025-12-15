import React from "react";

type InputProps = {
    label?: string;
    type?: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, type = "text", value, placeholder, onChange }: InputProps) => {
    return (
        <div className="input-group">
            {label && <label className="input-label">{label}</label>}
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="input-field"
            />
        </div>
    );
};

export default Input;
