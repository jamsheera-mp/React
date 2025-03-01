// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfileCard from './components/ProfileCard';
import Counter from './components/Counter';
import EnhancedCounter from './components/EnhancedCounter';
import Form from './components/Form';
import './App.css';

// Sample user data
const data = [
  { id: 1, name: "Leanne Graham", email: "leannegraham@abc.com" },
  { id: 2, name: "Ervin Howell", email: "ervinhowell@abc.com" }
];

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <h1>React Assignments</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/assignment1">Assignment 1: Profile Cards</Link></li>
            <li><Link to="/assignment2">Assignment 2: Counter</Link></li>
            <li><Link to="/assignment3">Assignment 3: Enhanced Counter</Link></li>
            <li><Link to="/assignment4">Assignment 4: Form</Link></li>
          </ul>
        </nav>
        
        <div className="content">
          <Routes>
            <Route path="/" element={
              <div className="home">
                <h2>React Assignments</h2>
                <p>Click on a link above to view each assignment</p>
              </div>
            } />
            <Route path="/assignment1" element={
              <div className="assignment">
                <h2>Assignment 1: Reusable Profile Card Component</h2>
                <div className="profile-cards-container">
                  {data.map(user => (
                    <ProfileCard 
                      key={user.id}
                      name={user.name}
                      email={user.email}
                    />
                  ))}
                </div>
              </div>
            } />
            <Route path="/assignment2" element={
              <div className="assignment">
                <h2>Assignment 2: Simple Counter</h2>
                <Counter />
              </div>
            } />
            <Route path="/assignment3" element={
              <div className="assignment">
                <h2>Assignment 3: Enhanced Counter with API</h2>
                <EnhancedCounter />
              </div>
            } />
            <Route path="/assignment4" element={
              <div className="assignment">
                <h2>Assignment 4: Form with Validation</h2>
                <Form />
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;