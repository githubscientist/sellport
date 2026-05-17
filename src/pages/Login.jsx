import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../App";

const Login = () => {
    const navigate = useNavigate();

    // get the user, setUser from the AuthContext
    const { user, setUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Logging in user...");
        setUser({ name: "Krish" });

        setTimeout(() => {
            console.log("User logged in successfully!");
            navigate("/dashboard");
        }, 500);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    )
}

export default Login;