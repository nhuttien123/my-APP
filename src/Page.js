import CartSite from "./features/Cart/Index.jsx";
import ProductSite from "./features/Product/Index.jsx";
import NotFound from "./components/NotFound.jsx";

const Page = {
  Site: [
    {
      path: "/cart",
      element: <CartSite />,
    },
    {
      path: "/",
      element: <ProductSite />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};
export default Page;
