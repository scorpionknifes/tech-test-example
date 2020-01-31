import React, { useContext, useState, useEffect } from 'react'
import { Row, Col, Form, Button, Container } from 'react-bootstrap'
import { Context } from './Context'

const Saved = () => {
    // Error message when there is no PIN in saved data
    const { data } = useContext(Context)
    return (
        <Container>
            {data.length !== 0 ? data.map((pins, key) => { return <Field Key={key} Pins={pins} /> }) : <p>0 Saved PINS</p>}
        </Container>
    )
}

interface FieldProps {
    Key: number,
    Pins: string[],
}

const Field = (Props: FieldProps) => {
    const { data, setData } = useContext(Context)
    const [name, setName] = useState(Props.Pins[5])

    // Ensure name is up to date when Props change
    useEffect(()=>{
        setName(Props.Pins[5])
    },[Props])
    
    // Delete PIN from data
    const deleteHandler = () => {
        let dataclone = Object.assign([], data)
        dataclone.splice(Props.Key, 1)
        setData(dataclone)
    }

    // Change name of the PIN
    const onChangeNameHandler = (key: number, value: string) => {
        let pins: string[] = Object.assign([], data[key])
        setName(value)
        pins[5] = value
        data[key] = pins
        setData(data)
    }

    // Loop to draw fields
    const drawField = () => {
        let fields = []
        for (let i = 0; i < 5; i++) {
            fields.push(<Col key={i}>
                <Form.Control value={Props.Pins[i]} />
            </Col>)
        }
        return fields
    }

    return (
        <Row key={Props.Key} style={{ paddingBottom: 10 }}>
            <Col>
                <Form.Control placeholder="name" value={name} onChange={(e: any) => onChangeNameHandler(Props.Key, e.target.value)} />
            </Col>
            {drawField()}
            <Col>
                <Button variant="danger" onClick={deleteHandler}>Delete</Button>
            </Col>
        </Row>
    )
}

export default Saved