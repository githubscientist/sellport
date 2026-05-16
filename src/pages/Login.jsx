import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Logging in user...");

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
        </div>
    )
}

export default Login;