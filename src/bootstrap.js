import "mfe-helpers/events/handlers";
import React from "react";
import ReactDOM from "react-dom/client";
import { registry, webpack } from "@mohantalachutla/mfe-utils";
import "./index.css";
import Home from "./Home";
import mfeConfig from "#/mfe.config.json";

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

// TODO:validate config file

const root = ReactDOM.createRoot(rootElement);

root.render(<Home />);

// TODO: register to be redis
