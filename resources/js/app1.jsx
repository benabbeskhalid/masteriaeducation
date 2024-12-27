import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar-';
import Home from './components/Home-';
import About from './components/About';
import Contact from './components/Contact-';
import logo from '../img/its.png'; // Chemin de l'image locale
import  '../css/style.css';
// import styles from '../css/style.css';

//button
import Button from './components/Button-';
const App = () => {
    const containerStyle = {
        backgroundColor: '#f0f0f0',
        padding: '20px',
        textAlign: 'center',
      };
    
      const titleStyle = {
        color: '#2c3e50',
        fontSize: '2rem',
      };
    
const handleClick=()=>{
    alert('Master IA en éducations!');
};
const fruitsArray=['banane', 'fraise', 'pomme'];
    return (
        
        <Router>

         
<> 
<Button onClick={handleClick} color="green">Click Me</Button>
</>

            <div className="App">
           
             <h1 className={titleStyle}>css statique</h1>
            <h1 className="title">Bienvenue dans React</h1>
            </div>

            <Navbar />
            <img src="/img/p.png" alt="logo"/>
            {/* <img src="{logo}" alt="logo"/> */}
        <Routes>
                <Route path="/home" element={<Home Fruits={fruitsArray} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
