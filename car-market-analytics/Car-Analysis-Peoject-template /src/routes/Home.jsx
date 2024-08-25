import React, { useState, useEffect } from 'react';
import taladrodCars from '../data /taladrod-cars.json';
import taladrodCarsMin from '../data /taladrod-cars.min.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';
import { color } from 'chart.js/helpers';

const Home = () => {
  const [data, setData] = useState({ cars: [] });
  const [highlightedCars, setHighlightedCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(''); // State to track the selected brand
  const [brands, setBrands] = useState([]); // State to store the list of brands

  useEffect(() => {
    const combinedCars = [...taladrodCars.Cars, ...taladrodCarsMin.Cars];
    setData({ cars: combinedCars });

    // Extract unique brands from the cars data
    const uniqueBrands = [...new Set(combinedCars.map(car => car.NameMMT.split(' ')[0]))];
    setBrands(uniqueBrands);

    // Load highlighted cars from localStorage
    const storedHighlightedCars = JSON.parse(localStorage.getItem('highlightedCars')) || [];
    setHighlightedCars(storedHighlightedCars);
  }, []);

  const isCarHighlighted = (car) => {
    return highlightedCars.some(highlightedCar => highlightedCar.NameMMT === car.NameMMT);
  };

  const highlightCar = (car) => {
    let updatedHighlightedCars = [...highlightedCars];
    
    if (isCarHighlighted(car)) {
      updatedHighlightedCars = updatedHighlightedCars.filter(highlightedCar => highlightedCar.NameMMT !== car.NameMMT);
    } else {
      updatedHighlightedCars.push(car);
    }

    localStorage.setItem('highlightedCars', JSON.stringify(updatedHighlightedCars));
    setHighlightedCars(updatedHighlightedCars);
  };

  const filterCarsByBrand = () => {
    if (!selectedBrand) return data.cars;
    return data.cars.filter(car => car.NameMMT.startsWith(selectedBrand));
  };

  return (
    <div className="home-container">
      <h1 className="h1 text-secondary">Home</h1>
      
      <div className="brand-selection mb-4">
        <label htmlFor="brandSelect" className="form-label">Select a Brand:</label>
        <select 
          id="brandSelect" 
          className="form-select" 
          value={selectedBrand} 
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          {brands.map((brand, index) => (
            <option key={index} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      <div className="cars-list row">
        {filterCarsByBrand().map((car, index) => (
          <div key={index} className="car-item col-md-4 mb-4">
            <div className="card">
              <img src={car.Img300} alt={car.NameMMT} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{car.NameMMT}</h5>
                <p className="card-text">Price: {car.Prc}</p>
                <button
                  className={`btn ${isCarHighlighted(car) ? 'btn-success' : 'btn-warning'}`}
                  onClick={() => highlightCar(car)}
                >
                  {isCarHighlighted(car) ? <i className="bi bi-pin-fill"></i> : <i className="bi bi-pin-fill"></i>}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
