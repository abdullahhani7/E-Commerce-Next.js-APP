const { default: axios } = require("axios");

const axiosGlobal = axios.create({
  baseURL: "http://localhost:1337/api",
});

const getCategory = () => axiosGlobal.get("/categories");

export default {
  getCategory,
};
