'use client'

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Homepage from './home.js';
import { motion } from 'framer-motion';
import Cards from './CardGrid';
import './index.css';
import NavigationBar from './NavigationBar';

const App = () => {
  return (
    <Router>
      
      <Homepage />
    </Router>
  );
};

export default App;

// generate a boilerplate for a React a

