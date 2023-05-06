const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {API_VERSION} = require("./constants");
const app = express();

//Rutas
const authRoutes = require("./src/routes/auth");
//const userRoutes = require("./src/routes/user");
const depMun = require("./src/routes/departamentoMunicipio");

//extension client-rest
app.use(bodyParser.json());
//request con postman
app.use(bodyParser.urlencoded({ extended: true }));

//evitar bloqueos en el navegador cuando se trabaja en simultaneo con front y back
app.use(cors());
console.log(`/api/${API_VERSION}/`);
app.use(`/api/${API_VERSION}/auth`, authRoutes);
//app.use(`/api/${API_VERSION}/user`, userRoutes);
app.use(`/api/${API_VERSION}/`, depMun);

module.exports = app;