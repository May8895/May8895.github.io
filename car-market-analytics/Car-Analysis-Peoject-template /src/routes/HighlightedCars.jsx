// import React, { useState, useEffect } from 'react';

// const HighlightedCars = () => {
//   const [highlightedCars, setHighlightedCars] = useState([]);

//   useEffect(() => {
//     // Fetch highlighted cars from local storage on component mount
//     const savedHighlightedCars = JSON.parse(localStorage.getItem('highlightedCars')) || [];
//     // Ensure that savedHighlightedCars is an array
//     if (Array.isArray(savedHighlightedCars)) {
//       setHighlightedCars(savedHighlightedCars);
//     } else {
//       console.error("Invalid data format in localStorage.");
//     }
//   }, []);

//   const removeFromHighlights = (indexToRemove) => {
//     const updatedCars = highlightedCars.filter((_, index) => index !== indexToRemove);
//     setHighlightedCars(updatedCars);
//     localStorage.setItem('highlightedCars', JSON.stringify(updatedCars)); // Update local storage
//   };

//   return (
//     <div className="highlighted-cars container">
//       <h1 className="my-4">Highlighted Cars</h1>
//       {highlightedCars.length > 0 ? (
//         <div className="highlighted-cars-list row">
//           {highlightedCars.map((car, index) => {
//             // Ensure that car has the necessary properties
//             if (!car || !car.NameMMT) {
//               return <p key={index}>Invalid car data.</p>;
//             }

//             return (
//               <div key={index} className="highlighted-car col-md-4 mb-4">
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title">{car.NameMMT}</h5>
//                     {car.Img300 ? (
//                       <img src={car.Img300} alt={car.NameMMT} className="card-img-top" />
//                     ) : (
//                       <p>No image available</p>
//                     )}
//                     <p className="card-text">Price: {car.Prc}</p>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => removeFromHighlights(index)}
//                     >
//                       Remove from Highlights
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p>No highlighted cars available.</p>
//       )}
//     </div>
//   );
// };

// export default HighlightedCars;
import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './HighlightedCars.css';

const HighlightedCars = () => {
  const [highlightedCars, setHighlightedCars] = useState([]);

  useEffect(() => {
    // Fetch highlighted cars from local storage
    const savedHighlightedCars = JSON.parse(localStorage.getItem('highlightedCars')) || [];
    console.log("Saved Highlighted Cars:", savedHighlightedCars); // Debugging line

    // Check if savedHighlightedCars is an array and contains valid data
    if (Array.isArray(savedHighlightedCars)) {
      // Validate data structure
      const validCars = savedHighlightedCars.filter(car => car && car.NameMMT);
      if (validCars.length !== savedHighlightedCars.length) {
        console.error("Some cars in localStorage are invalid.");
      }
      setHighlightedCars(validCars);
    } else {
      console.error("Invalid data format in localStorage.");
    }
  }, []);

  const removeFromHighlights = (indexToRemove) => {
    const updatedCars = highlightedCars.filter((_, index) => index !== indexToRemove);
    setHighlightedCars(updatedCars);
    localStorage.setItem('highlightedCars', JSON.stringify(updatedCars)); // Update local storage
  };

  return (
    <div className="highlighted-cars container">
      <h1 className="my-4 text-secondary">Highlighted Cars</h1>
      {highlightedCars.length > 0 ? (
        <div className="highlighted-cars-list row">
          {highlightedCars.map((car, index) => {
            if (!car || !car.NameMMT) {
              return <p key={index}>Invalid car data.</p>;
            }

            return (
              <div key={index} className="highlighted-car col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{car.NameMMT}</h5>
                    {car.Img300 ? (
                      <img src={car.Img300} alt={car.NameMMT} className="card-img-top" />
                    ) : (
                      <p>No image available</p>
                    )}
                    <p className="card-text">Price: {car.Prc}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromHighlights(index)}
                    >
                      <i className="bi bi-pin-fill"></i> 
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No highlighted cars available.</p>
      )}
    </div>
  );
};

export default HighlightedCars;
