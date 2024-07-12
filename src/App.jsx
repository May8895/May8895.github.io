
// import { useState } from 'react'
// import './App.css'

// function App() {

//   // var a = 1
//   const [vat, setVat] = useState(0)
//   const[gross , setgross]= useState(0)
//   const [discount, setDiscount] = useState(0)




  
//   function handle(e , discount) {
//     let p = e.target.value
//     console.log(p)
//     let d = e.target.value
//     console.log
//     let g = p - d
//     let v = g * 0.07
//     setVat(v.toFixed(2))
//     setgross(g.toFixed(2))
//     setDiscount(d.toFixed(2))

//   }
  

//   return (
//     <>
//       <p style={{fontSize: '30pt'}}>Price:
//         <input type="number" 
//           style={{fontSize: '30pt'}} 
//           onChange={handle} />
//       </p>
//       <br />
//       <p style={{fontSize: '30pt'}}>Discount:
//         <input type="number" 
//           style={{fontSize: '30pt'}} 
//           onChange={handle(p,discount)} />
//       </p>
//       <h1>GROSS PRICE = {gross}</h1>
//       <h1>VAT = {vat}</h1>
//     </>
//   )
// }
// import { useState } from 'react'
// import './App.css'

// function App() {

//   const [vat, setVat] = useState(0)
//   const [gross, setGross] = useState(0)
//   const [discount, setDiscount] = useState(0)
//   const [price, setPrice] = useState(0)

//   function handle(e) {
//     const { name, value } = e.target;
//     if (name === 'price') {
//       setPrice(parseFloat(value));
//     } else if (name === 'discount') {
//       setDiscount(parseFloat(value));
//     }
//   }

//   function calculate() {
//     let g = price - discount;
//     let v = g * 0.07;
//     setVat(v.toFixed(2));
//     setGross(g.toFixed(2));
//   }

//   return (
//     <>
//       <p style={{fontSize: '30pt'}}>Price:
//         <input type="number" 
//           name="price"
//           style={{fontSize: '30pt'}} 
//           onChange={handle} />
//       </p>
//       <br />
//       <p style={{fontSize: '30pt'}}>Discount:
//         <input type="number" 
//           name="discount"
//           style={{fontSize: '30pt'}} 
//           onChange={handle} />
//       </p>
//       <br />
//       {/* <button onClick={calculate} style={{fontSize: '20pt'}}>Calculate</button> */}
//       <h1>GROSS PRICE = {gross}</h1>
//       <h1>VAT = {vat}</h1>
//     </>
//   )
// }

// export default App
import { useState } from 'react'
import './App.css'

function App() {

  const [vat, setVat] = useState(0)
  const [gross, setGross] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [price, setPrice] = useState(0)

  function handle(e) {
    const { name, value } = e.target;
    if (name === 'price') {
      setPrice(parseFloat(value) || 0);
    } else if (name === 'discount') {
      setDiscount(parseFloat(value) || 0);
    }

    let p = name === 'price' ? parseFloat(value) || 0 : price;
    let d = name === 'discount' ? parseFloat(value) || 0 : discount;

    let g = p - d;
    let v = g * 0.07;
    setVat(v.toFixed(2));
    setGross(g.toFixed(2));
  }

  return (
    <>
      <p style={{fontSize: '30pt'}}>Price:
        <input type="number" 
          name="price"
          style={{fontSize: '30pt'}} 
          onChange={handle} />
      </p>
      <br />
      <p style={{fontSize: '30pt'}}>Discount:
        <input type="number" 
          name="discount"
          style={{fontSize: '30pt'}} 
          onChange={handle} />
      </p>
      <h1>GROSS PRICE = {gross}</h1>
      <h1>VAT = {vat}</h1>
    </>
  )
}

export default App



