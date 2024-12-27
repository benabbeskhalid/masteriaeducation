import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data); // Les données de l'API sont directement accessibles dans response.data
       
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
      
      });
  }, []); // [] : Le useEffect s'exécute une seule fois après le montage

 
    return (
        <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
    )
};

export default Contact;
