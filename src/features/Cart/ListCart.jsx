import { Table, Tag, Space, Button } from "antd";
import React from "react";
import {
  PlusSquareOutlined,
  MinusSquareOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
function ListCart(props) {
  const cartItem = props.data;

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
          <a>Invite {record.id}</a>
          {record.quantity == 1 ? (
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
      key: cartItem.id,
      id: cartItem.idItem,
      name: cartItem.name,
      quantity: cartItem.quantity,
      price: cartItem.quantity * cartItem.price.toLocaleString("vi-vn") + "$",
      tags: ["nice", "developer"],
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}

export default ListCart;
