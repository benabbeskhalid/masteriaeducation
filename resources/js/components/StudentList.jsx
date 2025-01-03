import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState('');
    const [editingStudent, setEditingStudent] = useState(null);
    const [name, setName] = useState('');
    const [matricule, setMatricule] = useState('');

    // Charger les étudiants depuis l'API
    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = () => {
        axios.get('/api/students')
            .then((response) => setStudents(response.data))
            .catch((error) => console.error('Error fetching students:', error));
    };

    // Gérer la suppression d'un étudiant
    const deleteStudent = (id) => {
        axios.delete(`/api/students/${id}`)
            .then(() => {
                setStudents(students.filter(student => student.id !== id));
            })
            .catch((error) => console.error('Error deleting student:', error));
    };

    // Préparer la modification d'un étudiant
    const startEditing = (student) => {
        setEditingStudent(student.id);
        setName(student.name);
        setMatricule(student.matricule);
    };

    // Annuler la modification
    const cancelEditing = () => {
        setEditingStudent(null);
        setName('');
        setMatricule('');
    };

    // Soumettre les modifications
    const updateStudent = () => {
        axios.put(`/api/students/${editingStudent}`, { name, matricule })
            .then(() => {
                fetchStudents(); // Recharger les étudiants après mise à jour
                cancelEditing();
            })
            .catch((error) => console.error('Error updating student:', error));
    };

    // Filtrer les étudiants par recherche
    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.matricule.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Student List</h1>
            <input
                type="text"
                placeholder="Search by name or matricule"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredStudents.map((student) => (
                    <li key={student.id}>
                        {editingStudent === student.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name"
                                />
                                <input
                                    type="text"
                                    value={matricule}
                                    onChange={(e) => setMatricule(e.target.value)}
                                    placeholder="Matricule"
                                />
                                <button onClick={updateStudent}>Save</button>
                                <button onClick={cancelEditing}>Cancel</button>
                            </div>
                        ) : (
                            <div>
                                {student.name} - {student.matricule}
                                <button onClick={() => startEditing(student)}>Edit</button>
                                <button onClick={() => deleteStudent(student.id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
