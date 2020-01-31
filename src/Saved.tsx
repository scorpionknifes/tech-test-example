import React, { useContext, useState } from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import { Context } from './Context'

const Saved = () => {
    const {data} = useContext(Context)
    return (
        <Container>
            {data.length !== 0? data.map((pins, key)=> {return <Field Key={key} Pins={pins}/>}): <p>0 Saved PINS</p>}
        </Container>
    )
}

interface FieldProps {
    Key: number,
    Pins: string[],
}



const Field = (Props: FieldProps) => {
    const {data, setData} = useContext(Context)
    const [name, setName] = useState(Props.Pins[5])
    const deleteHandler = () => {
        let dataclone  = Object.assign([], data)
        dataclone.splice(Props.Key,1)
        setData(dataclone)
    }

    const onChangeNameHandler = (key: number, value: string) => {
        let pins: string[]  = Object.assign([], data[key])
        setName(value)
        pins[5] = value
        data[key] = pins
        setData(data) 
    }


    return (
        <Row key={Props.Key} style={{paddingBottom: 10}}>
            <Col>
                <Form.Control placeholder="name" value={name} onChange={(e: any)=> onChangeNameHandler(Props.Key, e.target.value)} />
            </Col>
            <Col>
                <Form.Control value={Props.Pins[0]}/>
            </Col>
            <Col>
                <Form.Control value={Props.Pins[1]}/>
            </Col>
            <Col>
                <Form.Control value={Props.Pins[2]}/>
            </Col>
            <Col>
                <Form.Control value={Props.Pins[3]} />
            </Col>
            <Col>
                <Form.Control value={Props.Pins[4]} />
            </Col>
            <Col>
                <Button variant="danger" onClick={deleteHandler}>Delete</Button>
            </Col>
        </Row>
    )
}

export default Saved