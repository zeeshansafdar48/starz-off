import ErrorPage from "./Error.jsx";
import Home from "./Home.jsx";
import PopularPeople from "./PopularPeople.jsx";

export const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/popular-people",
    element: <PopularPeople />,
    errorElement: <ErrorPage />
  }
];
