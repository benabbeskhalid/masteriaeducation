import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios = () => {
  const [data, setData] = useState(null);  // Holds fetched data
  const [loading, setLoading] = useState(true);  // Loading state to show loading message
  const [error, setError] = useState(null);  // Error state to handle errors

  useEffect(() => {
    // Make a GET request to fetch data
    axios
      .get('https://jsonplaceholder.typicode.com/posts')  // URL to fetch data from
      .then((response) => {
        setData(response.data);   // Update state with the fetched data
        setLoading(false);  // Set loading to false if there is an error
      })
      .catch((err) => {
        setError('Something went wrong!');  // Handle error if request fails
        setLoading(false);  // Set loading to false if there is an error
      });
  }, []);  // Empty dependency array to run the effect only once when the component mounts

  // If the request is still loading, show loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If an error occurred during the request, display the error message
  if (error) {
    return <div>{error}</div>;
  }

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

export default Axios;
