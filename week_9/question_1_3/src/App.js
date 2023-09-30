import Home from './components/Home';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home filter="All"/>,
  },
  {
    path: "/sales",
    element: <Home filter="Sales"/>,
  },
  {
    path: "/management",
    element: <Home filter="Management"/>,
  },
  {
    path: "/accounting",
    element: <Home filter="Accounting"/>,
  },
  {
    path: "/admin",
    element: <Home filter="Admin"/>,
  },
]);

function App() {
  return(
    <RouterProvider router={router} />
  );
}

export default App;
