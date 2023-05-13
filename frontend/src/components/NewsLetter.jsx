import React, { useState } from 'react';
import '../assets/styles/Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email: ${email}`);
    setEmail('');
    setIsChecked(false);
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-text">
        <p>Sign up to get personalized offers and deals</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="newsletter-input">
          <label htmlFor="email" className="input-label">
            Enter your email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit" className="newsletter-submit">
            Sign Up
          </button>
        </div>
        <div className="newsletter-checkbox">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
          />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
