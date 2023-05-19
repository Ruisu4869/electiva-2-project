const axios = require("axios");
const cityFlight = require("../models/cityFlight");
const express = require("express");
const app = express.Router();

const postReq = app.post("/access", async (req, res) => {
    try {
        const response = await app.post("https://test.api.amadeus.com/v1/security/oauth2/token", {
            grant_type: "client_credentials",
            client_id: "4W62tIdztGuO6ygZv2UWDur960QPWa8P",
            client_secret: "OXbrVARBNzpizCgb"
            },{
                headers: {
                    "Content-Type": "x-www-form-urlencoded"
                }
            }
        );
        const data = response.access_token;
        return data;
    } catch {
        console.log("No se puede obtener el token de acceso", error);
    }
})


app.get("/cityflight", async (req, res) => {
    try {
        const response = await axios.get("https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY,AIRPORT&keyword=MUC&countryCode=DE", {
            headers: {
                "Authorization": postReq
            }
        });
        const data = response.data;

        await cityFlight.deleteMany();
        await cityFlight.insertMany(data);
        res.status(201).send("Datos almacenados en la DB");
    } catch {
        console.log("Error al acceder a la API", error);
        res.status(500).send("Error accediendo al JSON");
    }
});

module.exports = app;