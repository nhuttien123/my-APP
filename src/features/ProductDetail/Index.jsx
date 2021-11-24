import React, { useEffect } from "react";
import { getProductDetail } from "../../redux/Slice/ProductDetail";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Spin, Button } from "antd";

function Detail(props) {
  console.log(props);
  const key = window.location.pathname.split("/product/").splice(1).toString();
  const { loading, data } = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(getProductDetail(key));
  }, [dispatch, key]);
  return (
    <Spin spinning={loading}>
      <Row>
        <Col xl={12}>
          <img src={data.images} style={{ width: "100%" }} alt="" />
        </Col>
        <Col xl={12}>
          <div
            style={{
              margin: "0 auto",
              display: "block",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h1>{data.name}</h1>
            <h2>Price {data.price}$</h2>
            <Button
              onClick={() =>
                props.addCart(data.id, data.price, data.images, data.name)
              }
            >
              Add to cart
            </Button>
          </div>
        </Col>
      </Row>
    </Spin>
  );
}
export default Detail;
