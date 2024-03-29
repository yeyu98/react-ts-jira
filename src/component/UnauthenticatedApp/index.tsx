import { useState } from "react";
import { Button, Card } from "antd";
import logo from "../../assets/logo.svg";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import styled from "@emotion/styled";
import LoginOrRegister from "./LoginOrRegister";

const UnauthenticatedApp = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleClick = () => setIsRegistered(!isRegistered);

  return (
    <Container>
      <Background />
      <Header />
      <ShadowCard>
        <Title>欢迎使用jira</Title>
        <LoginOrRegister isRegistered={isRegistered} />
        <a onClick={handleClick}>
          {!isRegistered ? "已经有账号了？请登录" : "没有账号？注册新账号"}
        </a>
      </ShadowCard>
    </Container>
  );
};

export const LongButton = styled(Button)`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgba(94, 108, 132);
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc((100vw - 40rem) / 2 - 3.2rem),
    calc((100vw - 40rem) / 2 - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`;

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export default UnauthenticatedApp;
