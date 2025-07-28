import { Route, Outlet, ScrollRestoration, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Header, Footer } from '@/components/_shared';
import { HomePage } from '@/pages';

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<HomePage />}></Route>
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