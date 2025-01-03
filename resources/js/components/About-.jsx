import React, { useEffect, useState } from 'react';

const About = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Une erreur est survenue');
            }
            return response.json(); // Parse le JSON
          })
          .then((data) => {
            setData(data); // Met à jour l'état
            setLoading(false);
          })
          

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

export default About;
