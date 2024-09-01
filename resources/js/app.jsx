// resources/js/app.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import ExampleComponent from "./components/ExampleComponent";
import AppRouter from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap Bundle JS (includes Popper)
import "bootstrap/dist/js/bootstrap.bundle.min";
const root = createRoot(document.getElementById("app"));
root.render(<AppRouter />);
