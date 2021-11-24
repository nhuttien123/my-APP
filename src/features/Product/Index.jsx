import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { getProduct } from "../../redux/Slice/Product";
import { Row, Spin, Button, Col, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./productList";

function ProductSite({ addCart }, type) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { data, loading } = useSelector((state) => state.products);
  const urlSearchParams = new URLSearchParams(window.location.search);
  let myParam = urlSearchParams.get("page");

  if (!myParam) {
    myParam = 1;
  }
  const [value, setValue] = React.useState(1);
  const [key, setKey] = useState({
    Key: "",
    Page: Number(myParam),
  });

  useEffect(() => {
    if (myParam == null) {
      unwrapResult(dispatch(getProduct({ name: key.Key, page: key.Page })));
    } else {
      unwrapResult(dispatch(getProduct({ name: key.Key, page: key.Page })));
    }
  }, [dispatch, myParam, key]);

  const onNext = () => {
    if (myParam) {
      history(`/my-app?page=${Number(myParam) + 1}`);
      setKey({
        ...key,
        Page: Number(myParam) + 1,
      });
    } else {
      history(`/my-app?page=2`);
      setKey({
        ...key,
        Page: 2,
      });
    }
  };

  const onPrev = () => {
    history(`/my-app?page=${Number(myParam) - 1}`);
    setKey({
      ...key,
      Page: Number(myParam) - 1,
    });
    if (myParam <= 2) {
      history("/my-app");
      setKey({
        ...key,
        Page: 1,
      });
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const filter = (key) => {
    history("/my-app/");
    setKey({
      Page: 1,
      Key: key,
    });
  };

  const cancelFilter = () => {
    history("/my-app/");
    setKey({
      Page: 1,
      Key: "",
    });
    setValue("");
  };

  return (
    <Spin spinning={loading} size="middle" style={{ marginTop: "5rem" }}>
      <Row gutter={[16, 26]}>
        <Col xl={4} style={{ margin: "0 auto", position: "relative" }}>
          <h1>Filter</h1>
          <Radio.Group
            onChange={onChange}
            value={value}
            style={{ position: "sticky", top: 50 }}
          >
            <Radio value={"cat"} onClick={() => filter("cat")}>
              Cat
            </Radio>
            <Radio value={"dog"} onClick={() => filter("dog")}>
              Dog
            </Radio>
            <Button onClick={cancelFilter} style={{ marginTop: "1rem" }}>
              Cancel Filter
            </Button>
          </Radio.Group>
        </Col>
        <Col xl={20}>
          <div
            style={{
              margin: "0 auto",
              width: "10rem",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            {!myParam ? (
              <Button onClick={onPrev} disabled>
                Prev
              </Button>
            ) : (
              <Button onClick={onPrev}>Prev</Button>
            )}

            <Button onClick={onNext}>Next</Button>
          </div>
          <Row gutter={[16, 16]}>
            {(data || []).map((e) => (
              <ProductList data={e} key={e.id} addCart={addCart} />
            ))}
          </Row>
        </Col>
      </Row>
    </Spin>
  );
}
export default ProductSite;
