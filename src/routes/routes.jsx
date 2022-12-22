import { lazy } from "react";

const Dashboard = lazy(() => import("@app/pages/Dashboard"));
const ItemLists = lazy(() => import("@app/pages/ItemLists"));

export const routes = [
  {
    exact: true,
    path: "/",
    element: <Dashboard />,
  },
  {
    exact: true,
    path: "/item-list/:id",
    element: <ItemLists />,
  },
];
