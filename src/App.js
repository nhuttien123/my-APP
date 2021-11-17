import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/Header.jsx";
import "antd/dist/antd.css";
import HomeSite from "./features/home_site/Index.jsx";
import ProductSite from "./features/product_site/Index.jsx";
import CartSite from "./features/cart_site/Index.jsx";
import NotFound from "./features/NotFound.jsx";
import { Layout } from "antd";
const { Content } = Layout;
function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 20 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Routes>
            <Route path="/" element={<HomeSite />} />
            <Route path="/product" element={<ProductSite />} />
            <Route path="/cart" element={<CartSite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Content>
    </div>
  );
}

export default App;
