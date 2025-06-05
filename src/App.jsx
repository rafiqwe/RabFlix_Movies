import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainlayOut";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Anime from "./pages/Anime";
import Favorites from "./pages/Favorites";
import MoviesDetails from "./pages/MovieDetails";
import AnimeDetails from "./pages/AnimeDetails";
const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <h1>404 Not Found</h1>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/movies/:id",
          element: <MoviesDetails />,
        },
        {
          path: "/anime",
          element: <Anime />,
        },
        {
          path: "/animes/:id",
          element: <AnimeDetails />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
