import { LoginOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "10rem" }}>
      <h1 style={{ fontSize: "4rem" }}>Welcome !!!</h1>
      <Link
        to="/my-app/login"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        login to app
        <LoginOutlined style={{ marginLeft: "1rem" }} />
      </Link>
    </div>
  );
}
export default HomePage;
