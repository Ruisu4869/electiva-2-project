import React from 'react';
import { Layout } from 'antd';
import Logo from "../../assets/img/png/logo-removebg-preview.png";
import "./LoginLayout.scss";
import { Link } from 'react-router-dom';

export const LoginLayout = (props) => {
    const {children} = props;
    const {Header, Footer, Content} = Layout;

  return (
    <Layout>
        <Layout className='login-layout'>
            <Header className='login-layout-header'>
            </Header>
            <Content className='login-layout-contentlogo'>
                <Link to="/">
                    <img className="login-layout-contentlogo-logo" src={Logo}/>
                </Link>
            </Content>
            <Content className='login-layout-content'>
                {children}
            </Content>
            <Footer className='login-layout-footer'>
                <p>
                    {new Date().getFullYear()} © SENNOVALAB. Todos los derechos reservados.
                </p>
            </Footer>
        </Layout>
    </Layout>
  );
};
