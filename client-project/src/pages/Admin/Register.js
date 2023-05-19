import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Modal,
    Row,
    Select,
  } from 'antd';
import React, { useEffect, useState } from 'react';
import "./Register.scss";
import { Link } from 'react-router-dom';
import axios from "axios";
import qs from "qs";

  const { Option } = Select;

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  export const Register = () => {

    //Metodos para renderizar los departamentos y municipios
    const [data, setData] = useState([]);
    //const [filteredData, setFilteredData] = useState([]);
    const [dato, setDato] = useState([]);
    const [selectData, setSelectData] =  useState([]);

      useEffect(() => {
        deptoArray();
      }, []);

    const deptoArray = async () => {
      try {
        const responseDepto = await axios.get("http://localhost:3100/api/v1/depto");
        setData(responseDepto.data);
      } catch (error) {
        console.error(error);
      }
    };

    const munArray = async (value) => {
      try {
        const responseMun = await axios.get(`http://localhost:3100/api/v1/mun`);
        const munFilter = responseMun.data.filter(
          (item) => item.departamento === value
        );
        setDato(munFilter);
      } catch (error) {
        console.log(error);
      }
    };

    //metodo handleFiltered
    const handleChange = (event) => {
      setSelectData(event);
      munArray(event);
    };

    /*const handlerMun = () => {
      const filtered = dato.filter(item => item.departamento === handlerFilter);
      setMunData(filtered);
    };*/

    //Metodo para la finalizacion del formulario
    const [form] = Form.useForm();
    
    const onFinish = async (values) => {
      try {
        const response = await axios.post("http://localhost:3100/api/v1/auth/register", qs.stringify(values), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        console.log("Respuesta del backend: ", response.data);
        Modal.confirm({
          title: "Registro exitoso",
          content: "Su registro ha sido exitoso, por favor confirme su correo",
          onOk: () => {
            window.location.href = "/";
          }
        });
      } catch (error){
        console.error("Error al enviar los datos al backend: ", error)
        Modal.confirm({
          title: "Registro invalido",
          content: "No se pudo registrar, usuario ya existe. ¿Desea iniciar sesión?",
          onOk: () => {
            window.location.href = "/admin/sign-in";
          }
        });
      }
    };

    //retorno
    return (
      <Form
        {...formItemLayout}
        form={form}
        className='register-form'
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'El correo con es valido',
            },
            {
              required: true,
              message: 'Ingresa un correo',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="password"
          label="Contraseña"
          rules={[
            {
              required: true,
              message: 'Ingresa una contraseña',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="firstname"
          label="Nombres"
          tooltip="Tus nombres sin apellidos"
          rules={[
            {
              required: true,
              message: 'Ingresa tu nombre',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastname"
          label="Apellidos"
          tooltip="Ingresa tus apellidos"
          rules={[
            {
              required: true,
              message: 'Ingresa tus apellidos',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="departamento"
          label="Departamento"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa tu departamento',
            },
          ]}
        >
          <Select placeholder="Departamento" value={selectData} onChange={handleChange}>
            {data.map((item) => (
              <Option key={item} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="municipio"
          label="Municipio"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa tu municipio',
            },
          ]}
        >
          <Select placeholder="Municipio">
            {dato.map((item) => (
              <Option key={item.municipio} value={item.municipio}>
                {item.municipio}
              </Option>
            ))}
          </Select>
        </Form.Item>
  
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className='register-button'>
            Registrarse
          </Button>
        </Form.Item>
        <Form.Item className='register-footer-button'>
          O <Link to='/admin/sign-in'>Inicia sesión</Link>
        </Form.Item>
      </Form>
    );
  };