import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Accueil from './components/Accueil';
import Navbar from './components/Navbar';

const App = () => {


    return (
      

        <BrowserRouter>
                                AGe: {3+9}
          <img src="/img/it.jpg" alt="logo" width="80" />
           
            <Navbar />

            <Routes>
                <Route path="/accueil" element={<Accueil />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>


    );
};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
