import { useEffect, useState } from "react";
import Product from "../components/Product";

const Dashboard = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://6a080eccfa9b27c848fa95f5.mockapi.io/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {
                    products
                        .map(product => (
                            <Product
                                key={product.id}
                                product={product}
                            />
                        ))
                }
            </ul>
        </div>
    )
}

export default Dashboard;