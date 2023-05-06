const axios = require("axios");
const departamentoMunicipio = require("../models/depMun");
const express = require("express");
const app = express.Router();

app.get("/opendata", async (req, res) => {
    try {
        const response = await axios.get("https://www.datos.gov.co/resource/xdk5-pm3f.json");
        const data = response.data;
        //gestion de informacion en la DB
        await departamentoMunicipio.deleteMany();
        await departamentoMunicipio.insertMany(data);
        res.status(201).send("Datos almacenados en la DB");
    } catch {
        console.log("Error al acceder a la API", error);
        res.status(500).send("Error accediendo al JSON");
    }
});

module.exports = app;