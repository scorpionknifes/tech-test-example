import React, { useContext, useState } from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'

const Saved = () => {
    return (
        <Container>

        </Container>
    )
}

const Field = (key: number,pins: string[]) => {
    return (
        <Row>
            <Col>
                <Form.Control value={pins[0]} />
            </Col>
            <Col>
                <Form.Control value={pins[1]} />
            </Col>
            <Col>
                <Form.Control value={pins[2]} />
            </Col>
            <Col>
                <Form.Control value={pins[3]} />
            </Col>
            <Col>
                <Form.Control value={pins[4]} />
            </Col>
            <Col>
                <Button variant="danger" >Delete</Button>
            </Col>
        </Row>
    )
}

export default Saved