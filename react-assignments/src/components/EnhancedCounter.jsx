// EnhancedCounter.jsx
import React, { useState, useEffect } from 'react';
import './EnhancedCounter.css';

const EnhancedCounter = () => {
  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${count}`);
        
        if (!response.ok) {
          throw new Error(`User with ID ${count} not found`);
        }
        
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if count is a valid user ID (1-10 for JSONPlaceholder)
    if (count >= 1 && count <= 10) {
      fetchUserData();
    } else {
      setError('User ID must be between 1 and 10');
      setUserData(null);
      setLoading(false);
    }
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(Math.max(1, count - 1)); // Prevent going below 1
  };

  return (
    <div className="enhanced-counter">
      <h2>User Counter</h2>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button className="counter-button decrement" onClick={decrement}>-</button>
        <button className="counter-button increment" onClick={increment}>+</button>
      </div>
      
      <div className="user-info-container">
        {loading && <div className="loading">Loading user data...</div>}
        
        {error && <div className="error">{error}</div>}
        
        {userData && !loading && !error && (
          <div className="user-info">
            <h3>{userData.name}</h3>
            <p><strong>Username:</strong> {userData.username}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <p><strong>Website:</strong> {userData.website}</p>
            <p><strong>Company:</strong> {userData.company.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedCounter;