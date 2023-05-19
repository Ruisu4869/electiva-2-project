import React, { useState } from 'react';
import { Space, Button } from "antd";
import "./LoginRegister.scss";
import { Link } from 'react-router-dom';
import { Logout } from "../Logout/Logout";

export const LoginRegister = () => {

    const [isLogged, setIsLogged] = useState(false);
    const [username, setusername] = useState('');

    const handleLogin = () => {
        setIsLogged(true);
        setusername('EXAMPLE LUIS');
    };

    //loading del boton sign in
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
    });
    setTimeout(() => {
        setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
        });
    }, 6000);
    };

  return (
    <div className='button'>
        {isLogged ? (
            <div>
                ¡Bienvendo, {username}!
                <Logout className="button-logout"/>
            </div>
        ) : (
            <div className='button-submenu'>
                <div>
                    <Link to="/admin/register">
                        <Space wrap>
                            <Button className="button-register">Register</Button>
                        </Space>
                    </Link>
                </div>
                <div>
                    <Link to="/admin/sign-in">
                        <Space wrap>
                            <Button type="primary" loading={loadings[0]} className='button-login' onClick={handleLogin}>
                                Sign In
                            </Button>
                        </Space>
                    </Link>
                </div>
            </div>
        )}
    </div>
  )
}
