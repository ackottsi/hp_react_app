import React from 'react';
import '../Header.css'
import {Container, Button, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header=(props)=>{
    return(
        <div className="header-container">
            <Row>
                <Col/>
                <Col><Link to='/' className='btn btn-primary'>HomePage</Link>{' '}</Col>
                <Col> <Link to='/NewPost' className='btn btn-primary'>New Post</Link>{' '}</Col>
                <Col/>
            </Row>
        </div>
            
    )
}

export default Header;