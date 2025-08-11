import { Route, Outlet, ScrollRestoration, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Header, Footer, SpecialCase } from '@/components/layout';
import { HomePage,ShopPage, AboutPage, ContactPage, OfferPage } from '@/pages';

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
        <Route index element={<HomePage />}></Route>
      </Route>
      <Route path="/shop" element={<ShopPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/offer" element={<OfferPage />}></Route>
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