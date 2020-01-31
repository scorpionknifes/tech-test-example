import React, { useContext, useState } from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import { Context  } from './Context'
import generate5unique from './module'


const Generate = () => {
    const [pins, setPins] = useState<string[]>(Array<string>(5))
    const { data, setData} = useContext(Context)

    const getPinHandler = () => {
        let Pin = generate5unique()
        Pin.push("")
        setPins(Pin)
    }

    const savePinHandler = () => {
        data.push(pins)
        setData(data)
    }

    return (
        <Container>
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
                    <Button onClick={getPinHandler} style={{width: 200}} variant="outline-primary" type="submit">Generate</Button>
                </Col>
                <Col >
                    <Button onClick={savePinHandler} style={{width: 200}} className="float-right" variant="primary" type="submit">Save</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Generate