import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Accueil from './components/Accueil';
import Navbar from './components/Navbar';
//import Axios from './components/Axios';
import AxiosPost from './components/AxiosPost';
//import Fetch from './components/Fetch';

import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

const App = () => {

    // const App = () => {
   const [students, setStudents] = useState([]);

        const handleAddStudent = (newStudent) => {
            setStudents((prevStudents) => [...prevStudents, newStudent]);
        };

        return (


            <>
                {/* AGe: {3 + 9}
                <img src="/img/it.jpg" alt="logo" width="80" /> */}

                {/* <Navbar /> */}


                <h1>Student Management</h1>
                <StudentForm onSuccess={handleAddStudent} />
                <StudentList students={students} />
                {/* <Fetch/> */}
                <AxiosPost/>

                {/* <Routes>
                    <Route path="/accueil" element={<Accueil />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes> */}
            </>


        );
    };

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
//export default App
