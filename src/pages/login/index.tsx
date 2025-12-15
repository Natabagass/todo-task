import Text from "../../components/ui/typography";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import { useLogin } from "../../hooks/useLogin";
import Head from "../../config/head";

const LoginPage = () => {
    const {
        handleLogin,
        email,
        password,
        setEmail,
        errMsg,
        setPassword
    } = useLogin()

    return (
        <>
            <Head
                title="Todo Task - Your easy managing partner"
                description="The all-in-one platform for managing task"
                image="/assets/og-image.png"
                url="https://todo-task.vercel.app"
            />

            <div className="login-wrapper">
                <div className="login-container">
                    <Text Type="h1" weight="bold" size="xl2" className="login-title">
                        Login
                    </Text>

                    {/* Form Login */}
                    <form onSubmit={handleLogin} className="login-form">
                        <Input
                            label="Email"
                            type="email"
                            value={email}
                            placeholder="Masukkan email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            label="Password"
                            type="password"
                            value={password}
                            placeholder="Masukkan password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button type="submit" variant="primary" className="login-button">
                            Login
                        </Button>

                        <Text Type="span" color="danger" size="md">
                            {errMsg}
                        </Text>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
