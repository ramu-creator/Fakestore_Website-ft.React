import React,{ useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import "../styles/App.css"
import { useNavigate } from 'react-router-dom';
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [btn, setBtn] = useState({});
  const navigate = useNavigate();

  // Fetch data when the component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then(val =>{
        console.log(val); // Log the data to inspect the structure
        if (Array.isArray(val)) {
          setData(val);
          const initial = val.reduce((acc, product) => {
            acc[product.id] = 1;
            return acc;
          }, {});
          setBtn(initial);
        } else {
          console.error('API response is not an array:', val);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  // Increment the quantity for a specific product
  const increment = (Id) => {
    setBtn((incBtn) => ({
      ...incBtn,
      [Id]: incBtn[Id] + 1
    }));
  };

  // Decrement the quantity for a specific product, ensuring it doesn't go below 1
  const decrement = (Id) => {
    setBtn((decBtn) => ({
      ...decBtn,
      [Id]: decBtn[Id] > 1 ? decBtn[Id] - 1 : 1
    }));
  };    
  // Filter the data based on the search term
  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <div>
     <NavBar />
      <input style={{width:"87%",margin:"15px 100px"}}  
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search products"
      />

      <div className='card-container'>
        {filteredData.map((item) =>{
          return(
            <div className='card' key={item.id}>
              <img className='card-image' src={item.image} alt={item.title}/>
              <div className='card-content'>
                <h2 className='card-title'>{item.title}</h2>
                <p className='card-description'>${item.description}</p>
                <p><i className="fa-light fa-dollar-sign"></i>{item.price}</p>
                <div className='card-rating'>
                  <span>Rating:{item.rating.rate}({item.rating.count} reviews)</span>
                </div>
                {/* increment and decrement buttons */}
                <div className='card-quantity'>
                  <button onClick={()=>decrement(item.id)} className='quantity-btn'>-</button>
                  <span className='quantity'>{btn[item.id]}</span>
                  <button className='quantity-btn' onClick={()=>increment(item.id)}>+</button>
                </div>
                <div>
                  <button onClick={()=>navigate("/about",{state:{item}})} className='card-btn'>Add to Cart</button>
                </div>
            </div>

          </div>
          )
        })}
      </div>
      <Footer />
    </div>
  );
}

export default SearchComponent;
