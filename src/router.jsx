import { createBrowserRouter } from "react-router-dom";
import { Login } from "./features/login";
import { Register } from "./features/register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])

export default router;