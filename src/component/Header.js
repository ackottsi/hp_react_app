import React from 'react';
import '../Header.css'
import {Container, Button, Row, Col, Nav, Form, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


const Header=(props)=>{
    return(
        <div className="header-container">
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/NewPost' className='nav-link'>New Post</Link>
                </Nav>
            </Navbar>
            <br />
     
    
      <br />
      
       
  

        <div className="header-container">
            <Row className="justify-content-md-center">
                <Col>
                <Link to='/' className='btn btn-primary header-btn'>HomePage</Link>
                <Link to='/NewPost' className='btn btn-primary header-btn'>New Post</Link>
                </Col>
            </Row>
        </div>
    </div>
    )
}

export default Header;