import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import ProtectedRoute from "./route/protected";
import TasksPage from "./pages/tasks";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />

            <Route
                path="/tasks"
                element={
                    <ProtectedRoute>
                        <TasksPage />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;
