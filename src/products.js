const axios = require("axios");

const getProducts = async () => {
    return axios.get(process.env.SERVICE_URL);
}

const getProductById = async (id) => {
    return axios.get(`${process.env.SERVICE_URL}/${id}`);
}

const getProductByName = async (productName) => {
    return axios.get(`${process.env.SERVICE_URL}/search?q=${productName}`);
}

const getProductCategories = async () => {
    return axios.get(`${process.env.SERVICE_URL}/categories`);
}

const addProduct = async (data) => {
    /* add post api deatils here */
    return true;
}

const updateProduct = async (id, body) => {
    /* update api deatils here */
    return true;
}

const patchProduct = async (id, data) => {
    /* patch api deatils here */
    return true;
}

const deleteProduct = async (id) => {
    /* delete api deatils here */
    return true;
}

module.exports = {
    getProducts,
    getProductById,
    getProductByName,
    getProductCategories,
    addProduct,
    updateProduct,
    patchProduct,
    deleteProduct
}