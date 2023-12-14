import React from "react";
import ReactDOM from "react-dom/client";
import Flow from "./Flow.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Client from "./Client.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Flow />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
