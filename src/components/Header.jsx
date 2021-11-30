import React, { useEffect } from "react";
import { Menu, Layout, Dropdown, Space, Badge } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

function HeaderComponent({ count }) {
  const { Header } = Layout;
  const logout = () => {
    localStorage.removeItem("accessKey");
    sessionStorage.removeItem("cartItem");
    window.location.replace("/#/");
    window.location.reload();
  };
  const menu = (
    <Menu>
      <Menu.Item key="3" icon={<LogoutOutlined />} onClick={logout}>
        <Space align="center"> Log-out</Space>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {}, []);

  return (
    <Header style={{ zIndex: 1, width: "100%" }}>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1" style={{ fontSize: "1.1rem" }}>
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<ShoppingCartOutlined style={{ fontSize: "1.1rem" }} />}
        >
          <Link to={"/cart"}>
            <Badge count={count}>
              <span style={{ color: "white" }}>Cart</span>
            </Badge>
          </Link>
        </Menu.Item>
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <Menu.Item
            key="3"
            icon={<UserOutlined style={{ fontSize: "1.1rem" }} />}
          >
            {localStorage.accessKey}
          </Menu.Item>
        </Dropdown>
      </Menu>
    </Header>
  );
}

export default HeaderComponent;
