import { useEffect, useState, type FormEvent } from "react";
import { DUMMY_USER } from "../data/dummy/user";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    {/* Ambil data dummy yang sudah dibuat */}
    const dummyAccount = DUMMY_USER
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("")

    {/* Logic handle user login */}
    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        const token = Math.random().toString(36).substring(2);

        if (email !== dummyAccount.email || password !== dummyAccount.password) {
            setErrMsg("Email atau Password Salah")
            return;
        }

        sessionStorage.setItem("auth", `${import.meta.env.VITE_SECRET_KEY}${token}`);
        navigate("/tasks", { replace: true });
    };

    const handleLogout = () => {
        sessionStorage.removeItem("auth")
        navigate("/", { replace: true });
    }

    {/* Logic checking ketika user kembali ke halaman login */}
    useEffect(() => {
        const token = sessionStorage.getItem("auth") || "";

        if (token.startsWith(`${import.meta.env.VITE_SECRET_KEY}`)) {
            navigate("/tasks", { replace: true });
        }
    }, [navigate]);

    return {
        setEmail,
        email,
        password,
        handleLogout,
        errMsg,
        setPassword,
        handleLogin
    }
}