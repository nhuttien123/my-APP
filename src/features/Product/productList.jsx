import { Col, Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";
function ProductList({ data, addCart }) {
  const { Meta } = Card;
  const { loading } = useSelector((state) => state.products);
  return (
    <>
      <Col xl={8} lg={8} md={12} sm={12} xs={24}>
        <div className="site-card-border-less-wrapper">
          <Card
            style={{ width: "100%" }}
            hoverable
            cover={
              <img
                alt="example"
                src={data.images}
                style={{ width: "100%", height: "16rem" }}
              />
            }
            actions={[
              <ShoppingCartOutlined
                key="setting"
                onClick={() => addCart(data.id)}
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
