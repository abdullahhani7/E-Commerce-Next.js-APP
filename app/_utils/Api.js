const { default: axios } = require("axios");

const axiosGlobal = axios.create({
  baseURL: "http://localhost:1337/api",
});

const getCategory = () => axiosGlobal.get("/categories?populate=*");

const getSlider = () =>
  axiosGlobal.get("/sliders?populate=*").then((resp) => {
    return resp.data.data;
  });

const getCategoryList = () =>
  axiosGlobal.get("/categories?populate=*").then((resp) => {
    return resp.data.data;
  });

const getProductsList = () =>
  axiosGlobal.get("/products?populate=*").then((resp) => {
    return resp.data.data;
  });

const getProductsByCategory = (category) =>
  axiosGlobal
    .get(`/products?filters[categories][name][$in]=${category}&populate=*`)
    .then((resp) => {
      return resp.data.data;
    });

export default {
  getCategory,
  getSlider,
  getCategoryList,
  getProductsList,
  getProductsByCategory,
};
