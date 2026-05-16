import axios from "axios";

const productsLoader = async () => {
    try {
        const response = await axios.get('https://6a080eccfa9b27c848fa95f5.mockapi.io/products')
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error)
        return [];
    }
}

export default productsLoader;