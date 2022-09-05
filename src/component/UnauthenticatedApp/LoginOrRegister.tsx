import React from "react";
import { useAuth } from "context/AuthContext/CreateAuthContext";
import { Form, Input } from "antd";
import { LongButton } from ".";

interface IProps {
  isRegistered: boolean;
}

function LoginOrRegister(props: IProps) {
  const { isRegistered } = props;
  const { register, login } = useAuth();

  const handleClick = (values: { username: string; password: string }) => {
    // isRegistered ? login(values) : register(values);
    if (isRegistered) {
      login(values);
    } else {
      register(values);
    }
  };

  return (
    <div>
      <Form onFinish={handleClick}>
        <Form.Item
          name={"username"}
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input type="text" placeholder="用户名" id="username" />
        </Form.Item>
        <Form.Item
          name={"password"}
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input type="password" placeholder="密码" id="password" />
        </Form.Item>
        <Form.Item>
          <LongButton type="primary" htmlType="submit">
            {isRegistered ? "登录" : "注册"}
          </LongButton>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginOrRegister;
