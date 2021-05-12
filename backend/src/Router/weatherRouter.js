const express = require("express");
const axios = require("axios");
const router = express.Router();

const getWeather = async (lat, lng) => 
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.openWeather}&units=imperial`);

router.get('/', async (req, res) => {
    const {lat, lng} = req.query;

    const {data: weather} = await getWeather(lat, lng);

    await res.send(weather);
})

module.exports = router;