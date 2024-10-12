import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import GetStartPage from "./GetStartPage";
import ProjectsPage from "./ProjectsPage";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/getstart", element: <GetStartPage /> },
  { path: "/projects", element: <ProjectsPage /> },
]);

export default routes;
