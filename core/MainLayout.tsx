import React from "react";
import { Layout, Menu } from "antd";

const { SubMenu } = Menu;
const { Header } = Layout;

function MainLayout(props: any) {
  const { children } = props;
  return (
    <Layout>
      <Header style={{ color: "white" }}>ÇAĞLAR GELİNLİK</Header>
      <div style={{ margin: 50 }}>{children}</div>
    </Layout>
  );
}

export default MainLayout;
