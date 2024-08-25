

// import React, { useState, useEffect } from 'react';
// import { Pie, Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, ArcElement } from 'chart.js';
// import taladrodCars from '../data /taladrod-cars.json';
// import taladrodCarsMin from '../data /taladrod-cars.min.json';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './DashBoard.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, ArcElement);

// const Dashboard = () => {
//   const [data, setData] = useState({ cars: [] });
//   const [expandedBrands, setExpandedBrands] = useState({});
//   const [highlightedCars, setHighlightedCars] = useState([]);

//   useEffect(() => {
//     const combinedCars = [...taladrodCars.Cars, ...taladrodCarsMin.Cars];
//     setData({ cars: combinedCars });

//     // Load highlighted cars from localStorage
//     const storedHighlightedCars = JSON.parse(localStorage.getItem('highlightedCars')) || [];
//     setHighlightedCars(storedHighlightedCars);
//   }, []);

//   const toggleBrand = (brand) => {
//     setExpandedBrands(prevState => ({
//       ...prevState,
//       [brand]: !prevState[brand]
//     }));
//   };

//   const isCarHighlighted = (car) => {
//     return highlightedCars.some(highlightedCar => highlightedCar.NameMMT === car.NameMMT);
//   };

//   const highlightCar = (car) => {
//     let updatedHighlightedCars = [...highlightedCars];
    
//     // Check if the car is already highlighted
//     if (isCarHighlighted(car)) {
//       // Remove car from highlighted list
//       updatedHighlightedCars = updatedHighlightedCars.filter(highlightedCar => highlightedCar.NameMMT !== car.NameMMT);
//     } else {
//       // Add car to highlighted list
//       updatedHighlightedCars.push(car);
//     }

//     localStorage.setItem('highlightedCars', JSON.stringify(updatedHighlightedCars));
//     setHighlightedCars(updatedHighlightedCars);
//   };

//   const processData = () => {
//     const brandMap = {};
//     data.cars.forEach(car => {
//       const brand = car.NameMMT.split(' ')[0];
//       const model = car.Model;
//       const price = parseFloat(car.Prc.replace(',', ''));
//       const imageUrl = car.Img300;

//       if (!brandMap[brand]) {
//         brandMap[brand] = { totalValue: 0, totalCars: 0, models: {}, image: imageUrl };
//       }

//       brandMap[brand].totalValue += price;
//       brandMap[brand].totalCars += 1;
//       if (!brandMap[brand].models[model]) {
//         brandMap[brand].models[model] = { totalValue: 0, count: 0, carData: car };
//       }
//       brandMap[brand].models[model].totalValue += price;
//       brandMap[brand].models[model].count += 1;
//     });

//     return brandMap;
//   };

//   const generateTableData = () => {
//     const brandMap = processData();
//     return Object.keys(brandMap).map(brand => (
//       <React.Fragment key={brand}>
//         <tr className="brand-row" onClick={() => toggleBrand(brand)}>
//         <td>
//            <i className="bi bi-chevron-right"></i> 
          
//             <img src={brandMap[brand].image} alt={brand} className="car-image" />
//             {brand}
//           </td>
//           <td>{brandMap[brand].totalValue.toLocaleString()}</td>
//           <td>{brandMap[brand].totalCars}</td>
//         </tr>
//         {expandedBrands[brand] && Object.keys(brandMap[brand].models).map(model => (
//           <tr key={model} className="model-row">
//             <td style={{ paddingLeft: '40px' }}>
//               <img src={brandMap[brand].models[model].carData.Img300} alt={model} className="car-image" />
//               {`${model}`}
//             </td>
//             <td>{brandMap[brand].models[model].totalValue.toLocaleString()}</td>
//             <td>{brandMap[brand].models[model].count}</td>
//             <td>
//               <button
//                 className={`btn btn-sm ${isCarHighlighted(brandMap[brand].models[model].carData) ? 'btn-success' : 'btn-warning'}`}
//                 onClick={() => highlightCar(brandMap[brand].models[model].carData)}
                
//               >
//                {isCarHighlighted(brandMap[brand].models[model].carData) ? <i class="bi bi-bag-heart"></i> : <i class="bi bi-bag-heart"></i>}
//               </button>
//             </td>
//           </tr>
//         ))}
//       </React.Fragment>
//     ));
//   };

//   const generatePieChartData = () => {
//     const brandMap = processData();
//     const labels = Object.keys(brandMap);
//     const data = labels.map(brand => brandMap[brand].totalValue);

//     return {
//       labels,
//       datasets: [{
//         label: 'Cars by Brand',
//         data,
//         backgroundColor: labels.map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`),
//       }],
//     };
//   };

//   const generateBarChartData = () => {
//     const brandMap = processData();
//     const brands = Object.keys(brandMap);
//     const labels = Array.from(new Set(brands.flatMap(brand => Object.keys(brandMap[brand].models))));
//     const datasets = brands.map(brand => ({
//       label: brand,
//       data: labels.map(model => brandMap[brand].models[model]?.count || 0),
//       backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
//     }));

//     return {
//       labels,
//       datasets,
//     };
//   };

//   return (
//     <div className="dashboard container">
//       <h1 className=" my-4 text-secondary dashboard-h1">Dashboard</h1>
//        <p className="text-muted total-cars">
//     Total Number of Cars: {data.cars.length}
//     </p>
  
//   <p className="my-4 text-secondary cars-table-title">
//     Cars Data Table
//   </p>
//       <table className="table table-striped table-bordered">
//         <thead>
//           <tr>
//             <th>Brand/Model</th>
//             <th>Total Value (Baht)</th>
//             <th>Total Number of Cars</th>
//             <th>Hightlight</th>
//           </tr>
//         </thead>
//         <tbody>
//           {generateTableData()}
//         </tbody>
//       </table>
     
        
      
//       <div className="chart-container pie-chart-container my-4">
//         <h2>Cars by Brand (Pie Chart)</h2>
//         <Pie data={generatePieChartData()} />       
//       </div>
//       <br />
//       <br />
//       <div className="chart-container bar-chart-container my-4">
//         <h2>Cars by Model (Stacked Bar Chart)</h2>
//         <Bar data={generateBarChartData()} options={{ indexAxis: 'x' }} />
//       </div>
     
//     </div>

//   );
// };

// export default Dashboard;
// Updated Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, ArcElement } from 'chart.js';
import taladrodCars from '../data /taladrod-cars.json';
import taladrodCarsMin from '../data /taladrod-cars.min.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DashBoard.css';

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, ArcElement);

const Dashboard = () => {
  const [data, setData] = useState({ cars: [] });
  const [expandedBrands, setExpandedBrands] = useState({});

  useEffect(() => {
    const combinedCars = [...taladrodCars.Cars, ...taladrodCarsMin.Cars];
    setData({ cars: combinedCars });
  }, []);

  const toggleBrand = (brand) => {
    setExpandedBrands(prevState => ({
      ...prevState,
      [brand]: !prevState[brand]
    }));
  };

  const processData = () => {
    const brandMap = {};
    data.cars.forEach(car => {
      const brand = car.NameMMT.split(' ')[0];
      const model = car.Model;
      const price = parseFloat(car.Prc.replace(',', ''));
      const imageUrl = car.Img300;

      if (!brandMap[brand]) {
        brandMap[brand] = { totalValue: 0, totalCars: 0, models: {}, image: imageUrl };
      }

      brandMap[brand].totalValue += price;
      brandMap[brand].totalCars += 1;
      if (!brandMap[brand].models[model]) {
        brandMap[brand].models[model] = { totalValue: 0, count: 0, carData: car };
      }
      brandMap[brand].models[model].totalValue += price;
      brandMap[brand].models[model].count += 1;
    });

    return brandMap;
  };

  const generateTableData = () => {
    const brandMap = processData();
    return Object.keys(brandMap).map(brand => (
      <React.Fragment key={brand}>
        <tr className="brand-row" onClick={() => toggleBrand(brand)}>
          <td>
            <i className="bi bi-chevron-right"></i>
            <img src={brandMap[brand].image} alt={brand} className="car-image" />
            {brand}
          </td>
          <td>{brandMap[brand].totalValue.toLocaleString()}</td>
          <td>{brandMap[brand].totalCars}</td>
        </tr>
        {expandedBrands[brand] && Object.keys(brandMap[brand].models).map(model => (
          <tr key={model} className="model-row">
            <td style={{ paddingLeft: '40px' }}>
              <img src={brandMap[brand].models[model].carData.Img300} alt={model} className="car-image" />
              {`${model}`}
            </td>
            <td>{brandMap[brand].models[model].totalValue.toLocaleString()}</td>
            <td>{brandMap[brand].models[model].count}</td>
          </tr>
        ))}
      </React.Fragment>
    ));
  };

  const generatePieChartData = () => {
    const brandMap = processData();
    const labels = Object.keys(brandMap);
    const data = labels.map(brand => brandMap[brand].totalValue);

    return {
      labels,
      datasets: [{
        label: 'Cars by Brand',
        data,
        backgroundColor: labels.map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`),
      }],
    };
  };

  // const generateBarChartData = () => {
  //   const brandMap = processData();
  //   const brands = Object.keys(brandMap);
  //   const labels = Array.from(new Set(brands.flatMap(brand => Object.keys(brandMap[brand].models))));
  //   const datasets = brands.map(brand => ({
  //     label: brand,
  //     data: labels.map(model => brandMap[brand].models[model]?.count || 0),
  //     backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  //   }));

  //   return {
  //     labels,
  //     datasets,
  //   };
  // };
  const generateBarChartData = () => {
    const brandMap = processData();
    const brands = Object.keys(brandMap);
    const labels = Array.from(new Set(brands.flatMap(brand => Object.keys(brandMap[brand].models))));
    const datasets = brands.map(brand => ({
      label: brand,
      data: labels.map(model => brandMap[brand].models[model]?.count || 0),
      backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      stack: 'stack1', // Ensure stacking
    }));
  
    return {
      labels,
      datasets,
    };
  };
  
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    }
  };
  
  // In your render method or return statement
  
  

  return (
    <div className="dashboard container">
      <h1 className=" my-4 text-secondary dashboard-h1">Dashboard</h1>
      <p className="text-muted total-cars">Total Number of Cars: {data.cars.length}</p>
      <p className="cars-table-title">Cars Data Table</p>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Brand/Model</th>
            <th>Total Value (Baht)</th>
            <th>Total Number of Cars</th>
          </tr>
        </thead>
        <tbody>
          {generateTableData()}
        </tbody>
      </table>

      <div className="chart-container pie-chart-container ">
        <h2>Cars by Brand (Pie Chart)</h2>
        <Pie data={generatePieChartData()} />
      </div>
      <br />
      <br />
      <div className="chart-container bar-chart-container ">
        <h2>Cars by Model (Stacked Bar Chart)</h2>
        <Bar data={generateBarChartData()} options={{ indexAxis: 'x' }} />
      </div>
    </div>
  );
};

export default Dashboard;
