// npm install react-router-dom@6
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './components/About';
import JSX from './components/JSX';

class ReactRouters extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to='/about'>About</Link> | 
                    <Link to='/jsx'>JSX</Link>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/jsx" element={<JSX />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default ReactRouters;