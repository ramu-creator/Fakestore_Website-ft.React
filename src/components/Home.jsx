import { useState, useEffect } from 'react';
function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then(val => setData(val))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Filter the data based on the search term
  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div id='home-container'>
      <input id='home-search'
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search products"
      />

      <div id='home-card'>
        {filteredData.map((item) => (
          <div key={item.title}>
              <img src={item.image} alt="#"/>
              
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
