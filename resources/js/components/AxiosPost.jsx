import React, { useState } from 'react';
import axios from 'axios';

const AxiosPost = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [responseData, setResponseData] = useState(null);  // État pour stocker la réponse de l'API

  const handleSubmit = (e) => {
    e.preventDefault();

    // Les données que nous souhaitons envoyer
    const userData = {
      name,
      email,
    };

    // Effectuer la requête POST avec Axios
    axios
      .post('https://jsonplaceholder.typicode.com/users', userData)  // URL de l'API et données à envoyer
      .then((response) => {
        setResponseData(response.data);  // Enregistrer la réponse de l'API
      });
  };

  return (
    <div>
      <h1>Envoyer des données avec Axios (POST)</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Entrez votre nom"
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email"
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>

      {/* Affichage de la réponse */}
      {responseData && (
        <div>
          <h2>Réponse de l'API :</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AxiosPost;
