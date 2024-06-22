import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { ListPage } from "./pages/listPage/ListPage";
import { SinglePage } from "./pages/singlePage/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
