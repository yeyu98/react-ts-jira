import { useState } from "react";
import ProjectMain from "screens/ProjectList/Index";
import { ReactComponent as SoftwareLogo } from "../../assets/software-logo.svg";
import { useAuth } from "context/AuthContext/CreateAuthContext";
import ImgList from "../../screens/ProjectList/ImgList";
import { Button, Dropdown, Menu } from "antd";
import { Row } from "component/lib";
import styled from "@emotion/styled";

const AuthenticatedApp = () => {
  const [isShow, setIsShow] = useState(false);
  const { logout, user } = useAuth();

  const handleLogOut = () => {
    logout();
  };

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <Container>
        <Header between={true}>
          <HeaderLeft gap={true}>
            <SoftwareLogo width={"18rem"} color={"rgba(38, 132, 255)"} />
            <h2>项目</h2>
            <h2>用户</h2>
          </HeaderLeft>
          <HeaderRight>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key={"logout"}>
                    <a onClick={handleLogOut}>登出</a>
                  </Menu.Item>
                </Menu>
              }
            >
              <a onClick={(e) => e.preventDefault()}>{`Hi,${user?.name}!`}</a>
            </Dropdown>
          </HeaderRight>
        </Header>
        <Main>
          <ProjectMain />
          <Button onClick={handleClick}>切换</Button>
          {isShow ? <ImgList /> : null}
        </Main>
        <Footer>footer</Footer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-areas: "header" "main" "footer";
  height: 100vh;
`;

const Header = styled(Row)`
  grid-area: header;
`;
const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;

const Main = styled.main`
  grid-area: main;
`;
const Footer = styled.footer`
  grid-area: footer;
`;

export default AuthenticatedApp;
