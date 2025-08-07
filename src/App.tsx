import { Route, Outlet, ScrollRestoration, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Header, Footer, SpecialCase } from '@/components/layout';
import { HomePage } from '@/pages';

const Layout = () => {
  return (
    <div>
      <Header />
      <SpecialCase />
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
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;