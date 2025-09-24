// src/layouts/AuthLayout.jsx
import React from "react";

function AuthLayout({ children }) {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.logo}>Coding Tracker</h1>
        {children}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f5f5f5",
  },
  box: {
    width: "400px",
    padding: "2rem",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  },
  logo: {
    textAlign: "center",
    marginBottom: "1.5rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
};

export default AuthLayout;
