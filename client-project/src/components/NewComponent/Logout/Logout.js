import React from 'react'
import { Button, Modal } from "antd";
import { LogoutOutlined } from '@ant-design/icons';

export const Logout = () => {
  const handlerLogout = () => {
    Modal.confirm({
        title: "Cerrar Sesión",
        content: "¿Estas seguro que quieres cerrar sesión?",
        onOk: () => {
            console.log("Cerrando sesión");
        },
    });
  };
    return (
        <Button type='link' onClick={handlerLogout}>
            <LogoutOutlined />
        </Button>
    )
}