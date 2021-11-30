/* eslint-disable eqeqeq */
import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../redux/Slice/Login";
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";
function Login() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.userLogin);
  const status = data.status;

  useEffect(() => {
    if (status) {
      if (status === "success") {
        const sucess = data.response;
        localStorage.setItem("accessKey", [sucess.useName]);
        toast.success("Login success !");
        setTimeout(() => {
          window.location.replace("/my-app/");
        }, 1500);
      } else if (status === "wrong-pass") {
        toast.error("Password incorrect");
      } else if (status === "not-found") {
        toast.error("Username incorrect");
      }
    }
  }, [status, data.response, dispatch]);

  const onFinish = (values) => {
    unwrapResult(
      dispatch(
        getUser({
          Username: values.username,
          Password: values.password,
        })
      )
    );
    if (values.remember == true) {
      const token = {
        name: values.username,
        pass: values.password,
      };
      localStorage.setItem("rememberToken", JSON.stringify(token));
    } else {
      localStorage.removeItem("rememberToken");
    }
  };

  const remember = JSON.parse(localStorage.getItem("rememberToken"));

  return (
    <Row justify="center" style={{ paddingTop: "5rem" }}>
      <Col span={8}>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
            initialValue={remember ? remember.name : ""}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            initialValue={remember ? remember.pass : ""}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            {loading ? (
              <Button type="primary" htmlType="submit" disabled loading>
                Checking
              </Button>
            ) : (
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            )}
            <Link to="/register" style={{ marginLeft: "1rem" }}>
              Register
            </Link>
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
