// resources/js/components/Logout.jsx
import React from "react";
import axios from "../axios";

export default function Logout() {
    const handleLogout = async () => {
        try {
            await axios.post("/logout");
            alert("Logout successful!");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
}
