import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const Routers = () => {
  const router = useRoutes(routes);

  return router;
};

export default Routers;
