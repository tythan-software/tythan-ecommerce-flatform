import { Route, Outlet, ScrollRestoration, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Header } from './components/_shared';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        
        {/* ==================== Header Navlink End here ===================== */}
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;