import { useEffect, useState } from "react";
import { DUMMY_USER } from "../data/dummy/user";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const dummyAccount = DUMMY_USER
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("")

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const token = Math.random().toString(36).substring(2);

        if (email !== dummyAccount.email || password !== dummyAccount.password) {
            setErrMsg("Email atau Password Salah")
            return;
        }

        sessionStorage.setItem("auth", token);
        navigate("/tasks", { replace: true });
    };


    useEffect(() => {
        const auth = localStorage.getItem("auth");
        if (auth === "true") {
            navigate("/tasks", { replace: true });
        }
    }, [navigate]);

    return {
        setEmail,
        email,
        password,
        errMsg,
        setPassword,
        handleLogin
    }
}