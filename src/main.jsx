// ** React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 내부 import
import Flow from "./Main/Flow.jsx";
import Client from "./homeToWork/Client.jsx";

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
