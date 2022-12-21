import { lazy } from "react";

const Dashboard = lazy(() => import("@app/pages/Dashboard"));

export const routes = [
  {
    exact: true,
    path: "/",
    element: <Dashboard />,
  },
];
