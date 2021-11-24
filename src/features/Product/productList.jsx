import { Col, Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

function ProductList({ data, addCart }) {
  const { Meta } = Card;

  return (
    <>
      <Col xl={8} lg={8} md={12} sm={12} xs={24}>
        <div className="site-card-border-less-wrapper">
          <Card
            style={{ width: "100%" }}
            hoverable
            cover={
              <Link to={"/product/" + data.id}>
                <img
                  alt="example"
                  src={data.images}
                  style={{ width: "100%", height: "16rem" }}
                />
              </Link>
            }
            actions={[
              <ShoppingCartOutlined
                key="setting"
                onClick={() =>
                  addCart(data.id, data.price, data.images, data.name)
                }
              />,
            ]}
          >
            <Meta
              title={data.name}
              description={data.price.toLocaleString("vi-vn") + "$"}
            />
          </Card>
        </div>
      </Col>
    </>
  );
}

export default ProductList;
