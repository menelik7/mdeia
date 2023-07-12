import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

console.log("Repo name changed");

const el = document.getElementById("root");
const root = createRoot(el);

root.render(<App />);
