import { Table, Space, Button, Input } from "antd";
import React, { useRef } from "react";
import { DeleteOutlined } from "@ant-design/icons";
function ListCart(props) {
  const cartItem = props.data;
  const myRef = useRef();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          {cartItem.quantity < 1 ? (
            <Button disabled>-</Button>
          ) : (
            <Button onClick={() => props.minus(record.id)}>-</Button>
          )}
          <Button onClick={() => props.plus(record.id)}>+</Button>
          <Button onClick={() => props.remove(record.id)}>
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: cartItem.idItem,
      id: cartItem.idItem,
      name: cartItem.name,
      quantity: (
        <>
          <p> {cartItem.quantity}</p>
          Update quatity:
          <input
            type="number"
            min="1"
            defaultValue={cartItem.quantity}
            ref={myRef}
            onChange={() => props.change(cartItem.idItem, myRef.current.value)}
            style={{ marginLeft: "1rem" }}
          />
        </>
      ),
      price: cartItem.quantity * cartItem.price.toLocaleString("vi-vn") + "$",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}

export default ListCart;
