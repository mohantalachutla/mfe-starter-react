import "mfe-helpers/events/handlers";
import React from "react";
import ReactDOM from "react-dom/client";
import { registry, webpack } from "@mohantalachutla/mfe-utils";
import "./index.css";
import Home from "./Home";
import gateway from "#/gateway.config.json";
import mfeConfig from "#/mfe.config.json";

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

// TODO:validate config file

webpack.loadMfe(gateway.url, gateway.name, "./App").then(() => {
  registry.dispatch(gateway.events.others.OTHERS_GATEWAY_REGISTER, mfeConfig, {
    event: gateway.events.gateway.GATEWAY_OTHERS_ACKNOWLEDGE,
  });
});

const root = ReactDOM.createRoot(rootElement);

root.render(<Home />);
