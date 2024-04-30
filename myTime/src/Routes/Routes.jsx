import { createBrowserRouter } from "react-router-dom";
import Todo from "../Components/Todo";

export const Routes = createBrowserRouter([
    {
        path: '/todo',
        element: <Todo />,
    }
])

