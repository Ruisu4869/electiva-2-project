import React from "react";
import {Button} from "antd";
import "./MenuTop.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export const MenuTop = (props) => {
  const {menuCollapsed, setMenuCollapsed} = props;
  return (
  <div className="menu-top">
    <div className="menu-top-left">
      <Button type="link" onClick={()=>setMenuCollapsed(!menuCollapsed)}
        aria-label={menuCollapsed ? "Mostrar menu" : "Ocultar menu"}>
          {menuCollapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
      </Button>
    </div>
  </div>);  
};