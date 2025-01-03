import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ onSuccess }) => {
    const [formData, setFormData] = useState([{
        name: '',
        email: '',
        matricule: '',
        phone: '',
    }]);
    const [successMessage, setSuccessMessage] = useState(''); // État pour gérer le message de réussite

// handleChange : Cette fonction est appelée chaque fois qu'un utilisateur 
// tape quelque chose dans l'un des champs du formulaire. Elle met à jour 
// l'état formData en copiant les valeurs précédentes
//  et en modifiant uniquement la valeur du champ qui a été modifié 
//  (e.target.name et e.target.value).

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/students', formData).then((response) => {
            onSuccess(response.data);
            setSuccessMessage('Student added successfully!'); // Définit le message de réussite
            setTimeout(() => setSuccessMessage(''), 3000); // Efface le message après 3 secondes
            setFormData({ name: '', email: '', matricule: '', phone: '' });
        
        }) .catch((error) => {
           // console.error('Error adding student:', error);
        });
    };
   
   
    return (
       

        <form onSubmit={handleSubmit} >
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="matricule"
                placeholder="Matricule"
                value={formData.matricule}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />

            <button type="submit">Add Student</button>
{<p style={{ color: 'green' }}>{successMessage}</p>}
        </form>
    );
};
export default StudentForm;