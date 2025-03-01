// Form.jsx
import React, { useState, useRef } from 'react';
import './Form.css';

const Form = () => {
  // Controlled component approach
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });
  
  const [errors, setErrors] = useState({
    username: '',
    email: ''
  });

  // Reference to focus the input
  const usernameInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear errors when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: '', email: '' };

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      // Reset form after submission
      setFormData({ username: '', email: '' });
    } else {
      console.log('Form has errors');
      // Focus the first input with an error
      if (errors.username) {
        usernameInputRef.current.focus();
      }
    }
  };

  const handleFocusUsername = () => {
    usernameInputRef.current.focus();
  };

  return (
    <div className="form-container">
      <h2>User Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            ref={usernameInputRef}
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? 'error-input' : ''}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error-input' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-actions">
          <button type="button" onClick={handleFocusUsername} className="focus-button">
            Focus Username
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;