import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import productList from './acessory-product.json';
import DataTable from './components/DataTable';
 
function App() {
  const productRef = useRef()
  const quantityRef = useRef()

  const [price, setPrice] = useState(productList[0].price)
  const [selectedItems, setSelectedItems] = useState([]) // actual data
  const [filteredSelectedItems, setFilteredSelectedItems] = useState([]) // for show only

  const deleteItemByIndex = (index) => { 
    selectedItems.splice(index, 1) 
    setFilteredSelectedItems([...selectedItems]) 
    console.table(selectedItems)
  } 

  const sortAsc = () => {
    const sortedItems = [...selectedItems].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredSelectedItems(sortedItems);
    console.table(filteredSelectedItems);
  }

  const sortDes = () => {
    const sortedItems = [...selectedItems].sort((a, b) => b.name.localeCompare(a.name));
    setFilteredSelectedItems(sortedItems);
  }

  const search = (keyword) => { 
    setFilteredSelectedItems([ 
      ...selectedItems.filter(item=> item.name.toLowerCase().includes(keyword.toLowerCase())) 
    ]) 
  } 

  const handleSelect = (e)=> {
    const pid = parseInt(productRef.current.value)
    const product = productList.find(p=>p.id===pid)
    console.table(product)

    setPrice(product.price)
  }

  const handleAdd = (e) => {
    const pid = parseInt(productRef.current.value)
    console.log(typeof pid)
    const product = productList.find(p => p.id === pid)
    const q = quantityRef.current.value
    // console.log(productRef.current.value)
    // console.table(product)

    selectedItems.push({
      // id: product.id,
      // name: product.name,
      // price: product.price,
      ...product,
      quantity: q
    })
    
    setSelectedItems([...selectedItems])
    setFilteredSelectedItems([...selectedItems])

    console.table(selectedItems)
  }

  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
          <Form.Label htmlFor="inputProductName">Product Name</Form.Label>
          <Form.Select 
            id="inputProductName" 
            ref={productRef}
            onChange={handleSelect}>
            {
              productList.map(product => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))
            }
          </Form.Select>

          <Form.Label htmlFor="inputPrice">Price</Form.Label>
          <Form.Control
            type="number"
            id="inputPrice"
            readOnly
            value={price}
          />

          <Form.Label htmlFor="inputQuantity">Quantity</Form.Label>
          <Form.Control
            type="number"
            id="inputQuantity"
            aria-describedby="Quantity"
            defaultValue={1}
            ref={quantityRef}
          />

          <Button variant="success" onClick={handleAdd}>Add</Button>
          </Col>
          <Col>
            <DataTable
              data={filteredSelectedItems} 
              onDelete={deleteItemByIndex}
              onSearch={search}
              onAsc={sortAsc}
              onDes={sortDes}
              />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
