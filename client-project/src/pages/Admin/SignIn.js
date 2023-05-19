import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import "./SignIn.scss";
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

export const SignIn = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:3100/api/v1/auth/login", qs.stringify(values), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      console.log("respuesta ", response.data);
      window.location.href = "/login"
    } catch (err) {
      console.log("Invalid Login ", err);
      Modal.confirm({
        title: "Inicio de sesión invalido",
        content: "Datos Invalidos, no se pudo iniciar sesión",
        onOk: () => {
          window.location.reload();
        }
      })
    }
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      console.log("Ingreso exitoso");
    } else {
      setError("Credenciales invalidas");
    }
  }

  return (
    <Form
      onSubmitCapture={handlerSubmit}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Ingresa correo',
          },
        ]}
      >
        <Input 
          prefix={<UserOutlined 
          className="site-form-item-icon" />} 
          placeholder="Usuario" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Ingresa tu contraseña',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="">
          ¿Olvidaste tu contraseña?
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Iniciar sesión
        </Button>
        <p>¿No tienes cuenta? <Link to="/admin/register"> Registrate aquí</Link></p>
      </Form.Item>
    </Form>
  );
};