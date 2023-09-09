import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import config from "./config.json";
import "./main.css";

axios.defaults.baseURL = config.apiBaseUrl;

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
