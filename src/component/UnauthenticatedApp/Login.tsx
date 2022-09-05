import { useAuth } from "context/AuthContext/CreateAuthContext";
import { Form, Input } from "antd";
import { LongButton } from ".";

function Login(props: any) {
  const { login } = useAuth();

  const handleClick = (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <div>
      <Form onFinish={handleClick}>
        <Form.Item
          name={"username"}
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input type="text" id="username" placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name={"password"}
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input type="password" id="password" placeholder="密码" />
        </Form.Item>
        <Form.Item>
          <LongButton type="primary" htmlType="submit">
            登录
          </LongButton>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
