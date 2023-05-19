import React from 'react';
import { Layout } from 'antd';
import Logo from "../../assets/img/png/logo-removebg-preview.png";
import "./StartLayout.scss";
import { Link } from 'react-router-dom';
import { LoginRegister } from '../../components/NewComponent/LoginRegister/LoginRegister';

export const StartLayout = (props) => {
    const {children} = props;
    const {Header, Footer, Content} = Layout;

  return (
    <Layout>
        <Layout className='Start-layout'>
            <Header className='Start-layout-header'>
                <div>
                    <Link to="/">
                        <img className="Start-layout-header-logo" src={Logo}/>
                    </Link>
                </div>
                <div>
                    <LoginRegister className="Start-layout-header-login"/>
                </div>
            </Header>
            <Content className='Start-layout-contentlogo'>
                <Link to="/">
                    <img className="Start-layout-contentlogo-logo" src={Logo}/>
                </Link>
            </Content>
            <Content className='Start-layout-content'>
                {children}
            </Content>
            <Footer className='Start-layout-footer'>
                <p>
                    {new Date().getFullYear()} © SENNOVALAB. Todos los derechos reservados.
                </p>
            </Footer>
        </Layout>
    </Layout>
  )
}