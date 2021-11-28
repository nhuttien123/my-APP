/* eslint-disable eqeqeq */
import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../redux/Slice/Product";
import { Row, Spin, Button, Col, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./productList";
import qs from "query-string";
function ProductSite({ addCart }) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { data, loading } = useSelector((state) => state.products);
  const urlSearchParams = new URLSearchParams(window.location.search);
  let pageParam = urlSearchParams.get("page");
  let sortParam = urlSearchParams.get("order");
  let keyParam = urlSearchParams.get("key");
  const queryParams = qs.parse(window.location.search);
  if (!pageParam) {
    pageParam = 1;
  }
  let pathName = window.location.pathname;

  const [value, setValue] = React.useState(1);
  const [key, setKey] = useState({
    Key: keyParam,
    Page: pageParam,
    Sort: sortParam,
  });

  useEffect(() => {
    unwrapResult(
      dispatch(
        getProduct({
          name: key.Key,
          page: key.Page,
          sort: key.Sort,
        })
      )
    );
  }, [dispatch, key]);

  const onNext = () => {
    const newQueries = { ...queryParams, page: Number(pageParam) + 1 };
    history({ search: qs.stringify(newQueries) });
    setKey({
      ...key,
      Page: Number(pageParam) + 1,
    });
  };

  const onPrev = () => {
    const newQueries = { ...queryParams, page: Number(pageParam) - 1 };
    history({ search: qs.stringify(newQueries) });
    setKey({
      ...key,
      Page: Number(pageParam) - 1,
    });
  };

  const onChange = (e) => {
    const newQueries = { ...queryParams, key: e.target.value, page: 1 };
    history({ search: qs.stringify(newQueries) });
    setKey({
      ...key,
      Page: 1,
      Key: e.target.value,
    });
    setValue(e.target.value);
  };

  const cancelFilter = () => {
    if (sortParam) {
      history(`${pathName}?order=${sortParam}`);
      setKey({
        Page: 1,
        Sort: sortParam,
      });
    } else {
      history(pathName);
      setKey({
        Page: 1,
        Key: "",
      });
    }
    setValue("");
  };

  const Sort = (value) => {
    const newQueries = { ...queryParams, order: value };
    history({ search: qs.stringify(newQueries) });
    setKey({
      ...key,
      Page: pageParam,
      Sort: value,
    });
  };

  return (
    <Spin spinning={loading} size="middle" style={{ marginTop: "5rem" }}>
      <Row gutter={[16, 26]}>
        <Col xl={4} style={{ margin: "0 auto", position: "relative" }}>
          <h1>Filter</h1>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={"cat"}>Cat</Radio>
            <Radio value={"dog"}>Dog</Radio>

            <Radio value={"small"}>0 - 30.000$</Radio>
            <Radio value={"medium"}>30.000$ - 60.000$</Radio>
            <Radio value={"high"}>60.000$ - 100.000$</Radio>
          </Radio.Group>
          <Button onClick={cancelFilter} style={{ marginTop: "1rem" }}>
            Cancel Filter
          </Button>
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
          <div>
            <h3>
              Sort by:{" "}
              <span
                style={{
                  cursor: "pointer",
                  paddingLeft: "1rem",
                  textDecoration: "underline",
                }}
                onClick={() => Sort("asc")}
              >
                Low to high
              </span>
              <span
                style={{
                  cursor: "pointer",
                  paddingLeft: "1rem",
                  textDecoration: "underline",
                }}
                onClick={() => Sort("desc")}
              >
                High to low
              </span>
            </h3>
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
