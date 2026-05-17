import axios from "axios";

const productLoader = async ({ request }) => {
    try {
        const id = new URL(request.url).searchParams.get('id');
        const res = await axios.get(`https://6a080eccfa9b27c848fa95f5.mockapi.io/products/${id}`)
        return res.data;
    } catch (error) {
        return null;
    }
}

export default productLoader;