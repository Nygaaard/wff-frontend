import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WinesPage from "./pages/WinesPage";
import WinePage from "./pages/WinePage";
import ProducersPage from "./pages/ProducersPage";
import ProducerPage from "./pages/ProducerPage";
import ImportPage from "./pages/ImportPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";

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
        path: "/wines",
        element: <WinesPage />,
      },
      {
        path: "/wine",
        element: <WinePage />,
      },
      {
        path: "/producers",
        element: <ProducersPage />,
      },
      {
        path: "/producer",
        element: <ProducerPage />,
      },
      {
        path: "/import",
        element: <ImportPage />,
      },
      {
        path: "about/",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
