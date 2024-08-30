import { createBrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./publicRoutes";

const routes = [...PublicRoutes];

const appRoutes = createBrowserRouter(routes);

export default appRoutes;
