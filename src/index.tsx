import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppProviders from "./context";
import reportWebVitals from "./reportWebVitals";
import { loadDevTools } from "jira-dev-tool";
import "antd/dist/antd.less";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

loadDevTools(() =>
  root.render(
    <AppProviders>
      <App />
    </AppProviders>
  )
);

reportWebVitals();
