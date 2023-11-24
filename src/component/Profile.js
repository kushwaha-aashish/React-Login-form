import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()
    const handlelogout = () => {
        auth.logout()
        navigate("/")
    }
    return <div>
    <p>Welcome {auth.user}</p>
    <button onClick={handlelogout}>Logout</button>
    </div>
}

export default Profile;