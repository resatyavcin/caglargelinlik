import React from "react";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
const { SubMenu } = Menu;
const { Header } = Layout;

function MainLayout(props: any) {
  const { children } = props;

  const router = useRouter();
  return (
    <Layout>
      <Header style={{ color: "white" }}>
        <Menu mode="horizontal" theme={"dark"}>
          <Menu.Item onClick={() => router.push("/")}>
            Çağlar Gelinlik
          </Menu.Item>
          <Menu.Item onClick={() => router.push("/")}>Gelinlik</Menu.Item>
          <Menu.Item onClick={() => router.push("/engagement")}>
            Nişanlık
          </Menu.Item>
          <Menu.Item onClick={() => router.push("/fashion")}>Moda</Menu.Item>
        </Menu>
      </Header>
      <div style={{ margin: 50 }}>{children}</div>
    </Layout>
  );
}

export default MainLayout;
