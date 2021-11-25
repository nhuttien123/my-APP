/* eslint-disable eqeqeq */
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
  let pageParam = urlSearchParams.get("page");
  let keyParam = urlSearchParams.get("key");
  if (!pageParam) {
    pageParam = 1;
  }
  const pathName = window.location.pathname;

  const [value, setValue] = React.useState(1);
  const [key, setKey] = useState({
    Key: keyParam,
    Page: pageParam,
  });

  useEffect(() => {
    unwrapResult(dispatch(getProduct({ name: key.Key, page: key.Page })));
  }, [dispatch, key]);

  const onNext = () => {
    if (keyParam) {
      history(`${pathName}?key=${keyParam}&page=${Number(pageParam) + 1}`);
    } else {
      history(`${pathName}?page=${Number(pageParam) + 1}`);
    }
    setKey({
      ...key,
      Page: Number(pageParam) + 1,
    });
  };

  const onPrev = () => {
    if (keyParam) {
      history(`${pathName}?key=${keyParam}&page=${Number(pageParam) - 1}`);
    } else {
      history(`${pathName}?page=${Number(pageParam) - 1}`);
    }
    setKey({
      ...key,
      Page: Number(pageParam) - 1,
    });
  };

  const onChange = (e) => {
    history({
      pathname: pathName,
      search: "?" + new URLSearchParams({ key: e.target.value }).toString(),
    });
    setKey({
      Page: 1,
      Key: e.target.value,
    });

    setValue(e.target.value);
  };

  const cancelFilter = () => {
    history(pathName);
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
            <Radio value={"cat"}>Cat</Radio>
            <Radio value={"dog"}>Dog</Radio>
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
            {pageParam == 1 ? (
              <Button onClick={onPrev} disabled>
                Prev
              </Button>
            ) : (
              <Button onClick={onPrev}>Prev</Button>
            )}
            {(data || []).length == 0 ? (
              <Button disabled>Next</Button>
            ) : (
              <Button onClick={onNext}>Next</Button>
            )}
          </div>
          <Row gutter={[16, 16]}>
            {(data || []).length == 0 ? (
              <div style={{ margin: "0 auto", marginTop: "3rem" }}>
                <h1>End page</h1>
              </div>
            ) : (
              (data || []).map((e) => (
                <ProductList data={e} key={e.id} addCart={addCart} />
              ))
            )}
          </Row>
        </Col>
      </Row>
    </Spin>
  );
}
export default ProductSite;
