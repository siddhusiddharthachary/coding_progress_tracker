import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // or "./pages/App" if your App.jsx is inside src/pages

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
