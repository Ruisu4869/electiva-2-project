import React, { useState } from "react";
import { Button, Layout } from "antd";
import {MenuSider} from "../../components/NewComponent/MenuSider/MenuSider";
import {MenuTop} from "../../components/NewComponent/MenuTop/MenuTop";
import { FooterPage } from "../../components/FooterPage/FooterPage";
import "./GeneralLayout.scss";
import { Input } from "antd";
import Logo from "../../assets/img/png/logo-removebg-preview.png";
import {SearchOutlined} from "@ant-design/icons";
import { LoginRegister } from "../../components/NewComponent/LoginRegister/LoginRegister";
import { Logout } from "../../components/NewComponent/Logout/Logout";

export const GeneralLayout = (props) => {
  const {children} = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const {Header, Footer, Content} = Layout;
  const [search, setSearch] = useState('');

  //evento del buscador
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
          <Button onChange={handleChange} className="general-layout-header-search-button" type="primary" shape="circle">
            <SearchOutlined/>
          </Button>
          <Logout />
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