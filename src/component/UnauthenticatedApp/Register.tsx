import React from "react";
import { useAuth } from "context/AuthContext/CreateAuthContext";
import { Form, Input, Button } from "antd";

function Register(props: any) {
  const { register } = useAuth();

  const handleClick = (values: { username: string; password: string }) => {
    register(values);
  };

  return (
    <div>
      <Form onFinish={handleClick}>
        <Form.Item
          name={"username"}
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input type="text" id="username" />
        </Form.Item>
        <Form.Item
          name={"password"}
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input type="password" id="password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
