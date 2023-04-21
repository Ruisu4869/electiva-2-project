import React from 'react';
import { Row, Col } from "antd";
import "./FooterPage.scss";
 
export const FooterPage = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <Row gutter={[20,20]}>
          <Col xs={24} sm={12} md={8}>
            <h4>Infomación de contacto</h4>
            <p>Unversidad- Empresa</p>
            <p>Manizales</p>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h4>Enlaces utiles</h4>
            <ul className='list-unstyled'>
              <li>
                {" "}
                <a href="#/">Politica de privacidad</a>
              </li>
              <li>
                <a href="#/">Terminos y condiciones</a>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <h4>Suscribete a nuestro boletin</h4>
            <form>
              <div className='form-group'>
                <input type='email' className='form-control' placeholder='Ingresa tu correo electronico'/>
              </div>
              <button type='submit' className='btn btn-primary'>
                Suscribirme
              </button>
            </form>
          </Col>
        </Row>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <p className='text-center'>
                {new Date().getFullYear()} SENNOVALAB. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};