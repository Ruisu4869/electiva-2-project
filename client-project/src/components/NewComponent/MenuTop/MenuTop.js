import React from "react";
import {Button} from "antd";
import Logo from "../../../assets/img/png/descargar.png";
import "./MenuTop.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export const MenuTop = (props) => {
  const {menuCollapsed, setMenuCollapsed} = props;
  return (
  <div className="menu-top">
    <div className="menu-top__left">
      <Button type="link" onClick={()=>setMenuCollapsed(!menuCollapsed)}
        aria-label={menuCollapsed ? "Mostrar menu" : "Ocultar menu"}>
          {menuCollapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
      </Button>
      <img className="menu-top__left__logo" src={Logo} alt="Logo" />
    </div>
  </div>);
};