import { useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router";
import axios from "axios";

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const id = useSearchParams()[0].get("id");

    const fetchProduct = async () => {
        try {
            const res = await axios.get(`https://6a080eccfa9b27c848fa95f5.mockapi.io/products/${id}`)
            setProduct(res.data);
        } catch (error) {
            consolel.error("Error fetching product:", error);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div>
            <h1>Product Details</h1>
            {
                product ? (
                    <div>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Department: {product.department}</p>
                    </div>
                ) : <p>Loading Product...</p>
            }
        </div>
    )
}

export default ProductDetails;