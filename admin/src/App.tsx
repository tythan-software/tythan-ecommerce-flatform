import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginPage />} />
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