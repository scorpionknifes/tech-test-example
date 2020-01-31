import React, { useContext, useState } from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'

const Generate = () => {
    const [pins, setPins] = useState<string[]>(Array<string>(5))
    return (
        <Container style={{padding: 100}}>
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
            </Row>
            <Row style={{paddingTop: 10}}>
                <Col>
                    <Button style={{width: 200}} variant="outline-primary" type="submit">Generate</Button>
                </Col>
                <Col >
                    <Button style={{width: 200}} className="float-right" variant="primary" type="submit">Save</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Generate