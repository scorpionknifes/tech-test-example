import React from 'react'
import { Nav } from 'react-bootstrap'

const Navbar = () => {
    return (
        <Nav variant="tabs" defaultActiveKey="generate">
            <Nav.Item>
                <Nav.Link eventKey="generate">Generate</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="saved">Saved</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar