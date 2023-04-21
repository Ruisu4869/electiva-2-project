import React, { useState } from "react";
import { Layout } from "antd";
import {MenuSider} from "../../components/NewComponent/MenuSider/MenuSider";
import {MenuTop} from "../../components/NewComponent/MenuTop/MenuTop";
import { FooterPage } from "../../components/FooterPage/FooterPage";
import "./GeneralLayout.scss";
import { Logout } from "../../components/NewComponent/Logout/Logout";

export const GeneralLayout = (props) => {
  const {children} = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const {Header, Footer, Content} = Layout;

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed}/>
      <Layout className="general-layout"> 
        <Header className="general-layout-header">
          <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}></MenuTop>
          <Logout className="general-layout-header-logout"></Logout>
        </Header>
        <Content className="general-layout-content">{children}</Content>
        <Footer className="general-layout-footer">
          <FooterPage></FooterPage>
        </Footer>
      </Layout>
    </Layout>
  );
};