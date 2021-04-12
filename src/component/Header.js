import React from 'react';
import '../Header.css'
import {Container, Button, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header=(props)=>{
    return(
        <Row>
            <Col><Link to='/' className='btn btn-primary' variant="primary">HomePage</Link>{' '}</Col>
            <Col> <Button variant="primary">New Post</Button>{' '}</Col>
            <Col> <Button variant="primary">Something</Button>{' '}</Col>
            

        </Row>
            
    )
}

export default Header;