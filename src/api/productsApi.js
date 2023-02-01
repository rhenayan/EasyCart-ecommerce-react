import axios from 'axios'

const productsApi = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export const fetchAllProducts = async () => {
    const response = await productsApi.get('products')
    return response.data
}


export const fetchSingleProduct =async ({queryKey}) => {
    const productId= queryKey[1]
    const response = await productsApi.get(`products/${productId}`)
    return response.data
}

export const fetchJeweleryProducts = async () => {
    const response = await productsApi.get('products/category/jewelery')
    return response.data
}


export const fetchElectronicsProducts = async () => {
    const response = await productsApi.get('products/category/electronics')
    return response.data
}


export const fetchMensClothingProducts = async () => {
    const response = await productsApi.get("products/category/men's clothing")
    return response.data
}

export const fetchWomensClothingProducts  = async () => {
    const response = await productsApi.get("products/category/women's clothing")
    return response.data
}




export default productsApi