import React from 'react';
import '../Header.css'
import {Container, Button, Row, Col, Nav, Form, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'


const Header=(props)=>{
    return(
        <div className='fixed-top'>
            <Navbar bg='dark' variant='dark'>
                <Nav className='mr-auto'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/NewPost' className='nav-link'>New Post</Link>
                </Nav>
            </Navbar>
            <br />
     
    
      
       

        </div>

    )
}

export default Header;