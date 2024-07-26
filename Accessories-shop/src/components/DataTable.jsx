import React from 'react';
import { Button, Table, Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const DataTable = ({data, onDelete, onSearch, onAsc, onDes}) => {
  const sRef = React.useRef()
  const handleDelete = (index)=>{
    // console.log(`Delete ${index}`)
    // data.splice(index, 1);
    onDelete(index);
    // console.table(data)
  }

  const handleSearch = () => {
    const keyword = sRef.current.value
    onSearch(keyword)
  }

  const handleAscended = () => {
    onAsc()
  }

  const handleDessended = () => {
    onDes()
  }

  return (
    <Container>
      <input type="text" placeholder="Search..." ref={sRef} />{' '}
      <Button onClick={handleSearch} variant='outline-dark'>
        <i className="bi bi-search"></i> Search
      </Button>
      
      &emsp; Sort: 
      <Button onClick={handleAscended}><i className="bi bi-arrow-up" variant="outline"></i></Button> <Button onClick={handleDessended}><i className="bi bi-arrow-down"></i></Button>
      <Table>
        <thead>
          <tr>
            <th>Trash</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <i className='bi bi-trash' onClick={()=>handleDelete(index)}></i>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DataTable;