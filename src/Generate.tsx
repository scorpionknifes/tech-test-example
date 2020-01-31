import React, { useContext, useState } from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import { Context } from './Context'
import generate5unique from './Module'


const Generate = () => {
    const [pins, setPins] = useState<string[]>(Array<string>(5))
    const { data, setData } = useContext(Context)

    const getPinHandler = () => {
        let Pin = generate5unique()
        // Adds 6th element in array to be used as Name
        Pin.push("")
        setPins(Pin)
    }

    // Check if pin exist and if pin already exists
    const savePinHandler = () => {
        if (pins.length === 5) {
            alert("Cannot save empty")
        } else if (data.includes(pins)) {
            alert("Already exist")
        } else {
            data.push(pins)
            setData(data)
        }
    }
    
    // Loop to Draw Fields
    const drawField = () => {
        let fields = []
        for (let i = 0; i < 5; i++) {
            fields.push(<Col key={i}>
                <Form.Control value={pins[i]} />
            </Col>)
        }
        return fields
    }

    return (
        <Container>
            <Row>
                {drawField()}
            </Row>
            <Row style={{ paddingTop: 10 }}>
                <Col>
                    <Button onClick={getPinHandler} style={{ width: 200 }} variant="outline-primary" type="submit">Generate</Button>
                </Col>
                <Col >
                    <Button onClick={savePinHandler} style={{ width: 200 }} className="float-right" variant="primary" type="submit">Save</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Generate