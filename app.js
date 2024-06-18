const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.static(path.join(__dirname, "views")));

app.get("/api/base", async (req, res) => {
  const apiUrl = `http://211.237.50.150:7080/openapi/${process.env.API_KEY}/json/Grid_20150827000000000226_1/1/5`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("에러", error.message);
  }
});

app.get("/api/ingredient", async (req, res) => {
  const apiUrl = `http://211.237.50.150:7080/openapi/${process.env.API_KEY}/json/Grid_20150827000000000227_1/1/5`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("에러", error.message);
  }
});

app.get("/api/recipe", async (req, res) => {
  const apiUrl = `http://211.237.50.150:7080/openapi/${process.env.API_KEY}/json/Grid_20150827000000000228_1/1/5`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("에러", error.message);
  }
});

app.get("/api/base/detail", async (req, res) => {
  const id = req.query.id;
  console.log(id);
  const apiUrl = `http://211.237.50.150:7080/openapi/${process.env.API_KEY}/json/Grid_20150827000000000226_1?RECIPE_ID=${id}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("에러", error.message);
  }
});

app.get("/api/ingredient/detail", async (req, res) => {
  const id = req.query.id;
  const apiUrl = `http://211.237.50.150:7080/openapi/${process.env.API_KEY}/json/Grid_20150827000000000227_1?RECIPE_ID=${id}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("에러", error.message);
  }
});

app.get("/api/recipe/detail", async (req, res) => {
  const id = req.query.id;
  const apiUrl = `http://211.237.50.150:7080/openapi/${process.env.API_KEY}/json/Grid_20150827000000000228_1?RECIPE_ID=${id}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("에러", error.message);
  }
});

app.get("/api/base/pagination", async (req, res) => {
  const { page = 1 } = req.query;
  const apiUrl = `http://211.237.50.150:7080/openapi/${process.env.API_KEY}/json/Grid_20150827000000000226_1/1/${page}0`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("에러", error.message);
    res.status(500).json({ error: "서버 에러 발생" });
  }
});

app.get("/api/ingredient/id", async (req, res) => {
  const ingredient = req.query.ingredient;
  console.log(ingredient);
  const apiUrl = `http://211.237.50.150:7080/openapi/${process.env.API_KEY}/json/Grid_20150827000000000227_1?IRDNT_NM=${ingredient}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error("에러", error.message);
  }
});

app.listen(port, () => {
  console.log(`server on port ${port}`);
});

module.exports = app;
