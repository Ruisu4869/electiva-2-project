import React, { useState } from "react";
import { Layout } from "antd";
import {MenuSider} from "../../components/NewComponent/MenuSider/MenuSider";
import {MenuTop} from "../../components/NewComponent/MenuTop/MenuTop";
import { FooterPage } from "../../components/FooterPage/FooterPage";
import "./GeneralLayout.scss";
import { Logout } from "../../components/NewComponent/Logout/Logout";
import { Input } from "antd";
import Logo from "../../assets/img/png/logo-removebg-preview.png";
import {SearchOutlined} from "@ant-design/icons";

export const GeneralLayout = (props) => {
  const {children} = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const {Header, Footer, Content} = Layout;
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed}/>
      <Layout className="general-layout"> 
        <Header className="general-layout-header">
          <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}></MenuTop>
          <img className="general-layout-header-logo" src={Logo}/>
          <Input placeholder="Buscar" className="general-layout-header-search" value={search} onChange={handleChange}/>
          <a>
            <SearchOutlined className="general-layout-header-search-glass"/>
          </a>
          <Logout className="general-layout-header-logout"></Logout>
        </Header>
        <Content className="general-layout-content">
          {children}
        </Content>
        <Footer className="general-layout-footer">
          <FooterPage></FooterPage>
        </Footer>
      </Layout>
    </Layout>
  );
};