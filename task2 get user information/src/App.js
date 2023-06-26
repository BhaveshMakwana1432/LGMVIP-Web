import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Oval } from 'react-loading-icons'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cards from "./Components/cards";
import Button from 'react-bootstrap/Button';
import { Loader } from "./Components/loader.jsx";
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';

function App() {
  const [isUser, setUser] = useState([]);
  const [isData, setData] = useState(false);
  const [isButton, setButton] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setButton(true);
    fetch("https://reqres.in/api/users?page=1")
      .then(res => res.json())
      .then(res => {
        setUser(res.data);
        setTimeout(() => {
          setLoading(true);
        }, 1000);
        setTimeout(() => {
          setLoading(false);
          setData(true);
        }, 2000);
      })
      .catch((err) => {
        console.log("Could not get data from API -- ", err);
      });
  };

  return (
    <div className="maindiv">
      
      <Navbar bg="light" data-bs-theme="dark">
        <Container>
        <h1>User Information</h1>
        <Button href="#getusers" className='btn btn-warning' onClick={handleClick} variant="dark">Get Users</Button>{' '}
      
        </Container>
      </Navbar>
      <div className='container'>
        <div className='row justify-content-center'>
          {
            isLoading && (
              <Oval/>
            )
          }
          {
            !isLoading && isData && (
              <Cards isUser={isUser} />
            )
          }
        </div>
      </div>
    <p>copyright©bhaveshkumar.mca@gmail.com</p>
    </div>
    
  );
}

export default App;
