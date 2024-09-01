// resources/js/components/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get("/user");
                setUser(data.data);
            } catch (error) {
                console.error("Error fetching user:", error);
                navigate("/login");
            }
        };

        fetchUser();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await axios.post("/logout");
            navigate("/login");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Dashboard</h2>
            {user ? (
                <div className="alert alert-info">
                    <h4 className="alert-heading">Welcome, {user.name}!</h4>
                    <p className="mb-0">You are logged in and ready to go.</p>
                </div>
            ) : (
                <div className="alert alert-warning">
                    <p>Loading user data...</p>
                </div>
            )}
            <button className="btn btn-primary mt-3" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}
