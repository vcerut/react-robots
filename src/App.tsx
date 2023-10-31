import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
// import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
  {
    //wildcard match, percorso sempre da inserire per ultimo, nel caso in cui nessun altro path venga eseguito
    path: "*",
    // element: <h1>404</h1>, //pagina di errore personalizzata, si può anche creare una pagina a parte per poi importarla
    element: <Navigate to="/" />, //fallback redirect
  },
]);

function App() {
  return (
    <Suspense fallback={<p>Waiting for lazy load</p>}>
      {" "}
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
