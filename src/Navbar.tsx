import React, { useContext } from 'react'
import { Nav } from 'react-bootstrap'
import { Context } from './Context'


//Navigation Bar on the top
const Navbar = () => {
    const {setPage} = useContext(Context)
    return (
        <Nav variant="tabs" defaultActiveKey="generate">
            <Nav.Item>
                <Nav.Link eventKey="generate" onClick={()=>setPage("generate")}>Generate</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="saved" onClick={()=>setPage("saved")}>Saved</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar