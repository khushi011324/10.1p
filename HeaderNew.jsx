import React, { useState } from "react";

function Header() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email.");
      setSuccessMessage(""); // Clear any previous success message
      return;
    }

    // Check if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      setSuccessMessage(""); // Clear any previous success message
      return;
    }

    try {
      // Your email sending code here
      // For demonstration purposes, we'll simulate a successful email sending
      // Replace this with your actual email sending logic
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate sending for 1 second

      setEmail("");
      setError(""); // Clear any previous errors
      setSuccessMessage("Email sent successfully!");
    } catch (error) {
      setError("Error sending email: " + error.message);
      setSuccessMessage(""); // Clear any previous success message
    }
  };

  return (
    <div className="clr">
      <form id="signup-form" onSubmit={handleSubscribe}>
        <span>
          <label className="size">SIGN UP FOR OUR DAILY INSIDER</label>
          <input
            id="emailInput"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="subscribe">
            Subscribe
          </button>
        </span>
      </form>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
}

export default Header;
