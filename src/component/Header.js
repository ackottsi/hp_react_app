import React from 'react';
import '../Header.css'
import {Container, Button, Row, Col} from 'react-bootstrap'

const Header=(props)=>{
    return(
        <Row>
            <Col><Button variant="primary">HomePage</Button>{' '}</Col>
            <Col> <Button variant="primary">New Post</Button>{' '}</Col>
            <Col> <Button variant="primary">Something</Button>{' '}</Col>
            

        </Row>
            
    )
}

export default Header;