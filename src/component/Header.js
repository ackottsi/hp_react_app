import React from 'react';
import '../Header.css'
import {Container, Button, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header=(props)=>{
    return(
        <div className="header-container">
            <Row className="justify-content-md-center">
                <Col>
                <Link to='/' className='btn btn-primary header-btn'>HomePage</Link>
                <Link to='/NewPost' className='btn btn-primary header-btn'>New Post</Link>
                </Col>
            </Row>
        </div>
            
    )
}

export default Header;