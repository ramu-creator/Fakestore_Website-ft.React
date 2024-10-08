import React from 'react'
import NavBar from '../components/NavBar';
import { useLocation } from 'react-router-dom'

const ParticularProduct = () => {
    const location = useLocation();
    console.log(location);
    const product = location.state.item;
    console.log(product);
    
    

  return (
    <>
        <NavBar />
        <div className='card' key={product.id}>
              <img className='card-image' src={product.image} alt={product.title}/>
              <div className='card-content'>
                <h2 className='card-title'>{product.title}</h2>
                <p className='card-description'>${product.description}</p>
                <p><i className="fa-light fa-dollar-sign"></i>{product.price}</p>
                <div className='card-rating'>
                  <span>Rating:{product.rating.rate}({product.rating.count} reviews)</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default ParticularProduct
