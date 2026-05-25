import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import UserDetailPage from "./UserDetailPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/users",
    element: <UserListPage />,
  },
  {
    path: "/users/:id",
    element: <UserDetailPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

export default route;
