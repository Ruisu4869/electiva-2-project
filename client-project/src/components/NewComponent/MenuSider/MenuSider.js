import React from 'react'
import { TeamOutlined, AppstoreOutlined, HomeOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import {Layout, Menu} from "antd";
import "./MenuSider.scss";

export const MenuSider = (props) => {
  const {Sider} = Layout;
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = e => {
    const path =e.key;
    console.log(path);
    navigate(path);
  };

  const menuItems = [
    {key:"users", icon: <HomeOutlined />,label: "Gestión de Usuarios"},
    {key:"products", icon:<TeamOutlined />,label:"Portafolio de Servicios"},
    {key:"clients", icon:<AppstoreOutlined />,label:"Clientes",
          subMenu: [
            {key: "clients/list", icon: <TeamOutlined />, label: "Lista de Clientes"},
            {key: "clients/new", icon: <TeamOutlined />, label: "Nuevo Cliente"}
          ],
    },
    {key:"news", icon:<AppstoreOutlined />,label:"Gestión de Noticias"}
  ];

  const itemRender = (item , index) => {
    const {icon, label, subMenu} = item;
    const isSelected = location.pathname === item.key;
    if (subMenu) {
      return (
        <Menu.SubMenu key={item.key} icon={icon} title={label}>
          {subMenu.map((subMenuItem) => (
            <Menu.Item key={subMenuItem.key} onClick={navigateTo}>
              {subMenuItem.label}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={item.key} icon={React.cloneElement(icon, { className: "menu-item-icon"})} 
      className={isSelected ? "ant-menu-item ant-menu-item-selected" : "ant-menu-item"}>
        {label}
      </Menu.Item>
    );
  };
  return (
    <Sider className='menu-sider' collapsed={props.menuCollapsed}>
      <Menu 
        mode="inLine" 
        onClick={navigateTo}
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={menuItems.filter((item) => item.subMenu).map((item) => item.key)}
      >
        {menuItems.map((item) => itemRender(item))}
      </Menu>
    </Sider>
  );
};