import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<Dashboard />} /> */}
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