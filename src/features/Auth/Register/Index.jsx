/* eslint-disable eqeqeq */
import React, { useEffect } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/Slice/Register";
import { toast } from "react-toastify";
import { unwrapResult } from "@reduxjs/toolkit";
function Register() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { response, loading } = useSelector((state) => state.userRegister);

  useEffect(() => {
    if (response) {
      console.log(typeof response);
      if (typeof response === "object") {
        toast.success("Register success !");
        setTimeout(() => {
          history("/my-app/");
        }, 1500);
      } else if (typeof response === "string") {
        toast.error("Username already exist !");
      }
    }
  }, [response, history]);

  const onFinish = (values) => {
    if (values.password != values.re_password) {
      toast.error("Re-password incorrect", { position: "top-center" });
    } else {
      unwrapResult(
        dispatch(
          createUser({
            TenKhachHang: values.fullname,
            Username: values.username,
            Password: values.re_password,
            Email: values.email,
            Phone: "NULL",
            Avatar: "NULL",
          })
        )
      );
    }
  };

  return (
    <Row justify="center" style={{ paddingTop: "5rem" }}>
      <Col span={8}>
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Fullname"
            name="fullname"
            rules={[{ required: true, message: "Please input your fullname!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Re_Password"
            name="re_password"
            rules={[
              { required: true, message: "Please input your re-password!" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            {loading ? (
              <Button type="primary" htmlType="submit" disabled>
                Checking
              </Button>
            ) : (
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            )}
            <Link to="/" style={{ marginLeft: "1rem" }}>
              back
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default Register;
