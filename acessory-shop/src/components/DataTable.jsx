import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
 
 
const DataTable = ({ data,onDelete,onSearch }) => {
  const sRef = React.useRef()
  const handleDelete = (index) => {
    onDelete(index)
  }
 
const handleSearch = () => {
  const keyword = sRef.current.value;
  // console.debug(keyword);
  onSearch(keyword);
}
  return (
    <Container>
      <input type="text" placeholder="Search..." ref={sRef} />{' '}
      <Button onClick={handleSearch}>Search</Button>
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
              <i className="bi bi-trash" onClick={()=>handleDelete(index)}></i>
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