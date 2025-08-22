import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;