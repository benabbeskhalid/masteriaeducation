import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [data, setData] = useState([]);  // État pour stocker les données

  useEffect(() => {
    // Effectuer une requête GET avec fetch
    fetch('https://jsonplaceholder.typicode.com/posts')  // URL de l'API
      .then((response) => response.json())  // Convertir la réponse en JSON
      .then((data) => setData(data));  // Stocker les données dans l'état
  }, []);  // Le tableau vide fait en sorte que l'effet s'exécute une seule fois au montage du composant


  // Render the fetched data
  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
