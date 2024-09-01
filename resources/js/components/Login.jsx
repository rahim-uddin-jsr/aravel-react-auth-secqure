// resources/js/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await axios.get("/sanctum/csrf-cookie");
            await axios.post("/login", { email, password });
            navigate("/dashboard");
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Login</h2>
            <form onSubmit={handleLogin} className="w-100 max-w-md mx-auto">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>
            </form>
        </div>
    );
}
