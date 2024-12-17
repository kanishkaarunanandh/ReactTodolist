import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(props) {
    const navigate = useNavigate()
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const user = props.user || [];

    function handleUsername(evt) {
        setUname(evt.target.value);
    }

    function handlePassword(evt) {
        setPass(evt.target.value);
    }

    function handleLogin() {
        const foundUser = user.find(u => u.username === uname && u.password === pass);
        if (foundUser) {
            navigate("/App", { state: { userid: foundUser.username } });
        } else {
            alert("Invalid credentials. Please try again.");
        }
    }
    

    return (
        <div className="bg-black p-16">
            <div className="bg-white p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi 👋 </h1>
            <p>I help you manage your activities after you login :)</p>
                <div className="my-3 flex flex-col gap-2">
                    <input
                        onChange={handleUsername}
                        placeholder="Username"
                        className="border border-black w-52 p-1 rounded-md"
                    />
                    <input
                        onChange={handlePassword}
                        placeholder="Password"
                        type="password"
                        className="border border-black w-52 p-1 rounded-md"
                    />
                    <button
                        className="bg-[#FCA201] w-24 p-1 border rounded-md"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <p>
                        Don't have an account?{" "}
                        <Link to="/Signup" className="underline text-blue-700">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
