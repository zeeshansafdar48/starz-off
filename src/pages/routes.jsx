import ErrorPage from "./Error.jsx";
import Home from "./Home.jsx";
import Layout from "./Layout.jsx";
import PopularMovies from "./Movies/Popular.jsx";
import PopularPeople from "./PopularPeople.jsx";

export const paths = {
  root: "/",
  home: "/home",
  popularPeople: "/popular-people",
  popularMovies: "/movies/popular"
};

export const routes = [
  {
    path: paths.root,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.home,
        element: <Home />
      },
      {
        path: paths.popularPeople,
        element: <PopularPeople />
      },
      {
        path: paths.popularMovies,
        element: <PopularMovies />
      }
    ]
  }
];
