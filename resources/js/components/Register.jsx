// resources/js/components/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/register", {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
            });
            navigate("/login");
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Register</h2>
            <form onSubmit={handleRegister} className="w-100 max-w-md mx-auto">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="form-control"
                        required
                    />
                </div>
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
                <div className="mb-3">
                    <label
                        htmlFor="passwordConfirmation"
                        className="form-label"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="passwordConfirmation"
                        value={passwordConfirmation}
                        onChange={(e) =>
                            setPasswordConfirmation(e.target.value)
                        }
                        placeholder="Confirm your password"
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Register
                </button>
            </form>
        </div>
    );
}
