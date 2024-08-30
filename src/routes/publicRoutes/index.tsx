import Dashboard from "../../pages/dashboard";
import PublicLayout from "../../module/layout/publicLayout";
export const PublicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/auth",
        element: <div>Login</div>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];
