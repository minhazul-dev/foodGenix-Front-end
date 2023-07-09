import React, { useState } from 'react';
import { Container, Form, InputGroup, Table } from 'react-bootstrap';
import {data} from '../assests/NgoDataDetails/Data'


const DataFilter = () => {
    const [contacts, setContacts] = useState(data);
    const [search, setSearch] = useState('');
    console.log(data);
    return (
   
        <Container>
          <h1 className='text-center mt-4'>Search For NGO Near Your Area</h1>
          <Form>
            <InputGroup className='my-3'>
  
              {/* onChange for search */}
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search NGO'
              />
            </InputGroup>
          </Form>
         
          <Table striped bordered hover>
            <thead>
              <tr>
              <th>No</th>
                <th>Name of NGOs</th>
                
                <th>Address</th>
                <th>District</th>
                <th>Origin</th>
                {/* <th>Phone</th> */}
              </tr>
            </thead>
            <tbody>
             
              {data 
              //  .filter((item) => {
              //   return search.toLowerCase() === ''
              //     ? item
              //     : item['Name of NGOs'].toLowerCase().includes(search);
                  
              // })
                .filter((item) => {
                  return search.toLowerCase() === ''
                    ? item
                    : item.Address.toLowerCase().includes(search) ||
                     item['Reg. No.'].toLowerCase().includes(search) ||
                     item['Name of NGOs'].toLowerCase().includes(search) ||
                     item.Country.toLowerCase().includes(search) ;
                    
                }) 
                // .filter((item) => {
                //   return search.toLowerCase() === ''
                //     ? item
                //     : item['Reg. No.'].toLowerCase().includes(search);
                    
                // })
                .splice(0,20)
  
               .map((item, index) => (
                  <tr key={index}>
                    <td>{item['Sl.no']}</td>
                    <td>{item['Name of NGOs']}</td>
                
                    <td>{item.Address}</td>
                    <td>{item.District}</td>
                    <td>{item.Country}</td>
                    
                  </tr>
                  
                ))}
            </tbody>
          </Table>
        </Container>
     
    );
};

export default DataFilter;