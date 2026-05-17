import { useLoaderData } from "react-router";

const ProductDetails = () => {
    const product = useLoaderData();

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