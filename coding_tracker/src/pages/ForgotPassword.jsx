// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
    // 🔗 later: connect to backend API
  };

  return (
    <AuthLayout>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Reset Password</button>
      </form>
    </AuthLayout>
  );
}

export default ForgotPassword;
