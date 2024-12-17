import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
    const navigate = useNavigate();

    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");

    const user = props.user || [];  // Make sure to receive user from parent
    const setUser = props.setUser;  // Make sure to receive setUser from parent

    function handleUsername(evt) {
        setUname(evt.target.value);
    }

    function handlePassword(evt) {
        setPass(evt.target.value);
    }

    function addUser() {
        if (uname && pass) {
            setUser([...user, { username: uname, password: pass }]);  // Update the user array in parent
            navigate("/Login"); // Redirect to login after signup
        } else {
            alert("Please fill in all fields.");
        }
    }

    return (
        <div className="bg-black p-16">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi 👋</h1>
                <p>Please Sign Up Before Login</p>
                <div className="my-3 flex flex-col gap-2">
                    <input
                        onChange={handleUsername}
                        placeholder="Username"
                        className="border border-black w-52 p-1 rounded-md"
                    />
                    <input
                        onChange={handlePassword}
                        placeholder="Create password"
                        type="password"
                        className="border border-black w-52 p-1 rounded-md"
                    />
                    <button
                        className="bg-[#FCA201] w-24 p-1 border rounded-md"
                        onClick={addUser}
                    >
                        Sign Up
                    </button>
                    <p>
                        Already have an account?{" "}
                        <Link to="/Login" className="underline text-blue-700">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
