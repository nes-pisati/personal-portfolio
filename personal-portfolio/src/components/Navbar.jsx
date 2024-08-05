import React from 'react'
import Styles from './NavFoot.module.css'
import {Container, Row, Col} from 'react-bootstrap'

export default function Navbar() {
  return (
    <Container fluid className={Styles.nav}>
        <Row className='d-flex'>
            <Col lg={4} className='ps-5'>
                <p className={Styles.text}>Vanessa Pisati</p>
            </Col>
            <Col lg={4} className='d-flex justify-content-center'>
                <p className={Styles.text}>Web developer</p>
            </Col>
            <Col lg={4} className='d-flex justify-content-end pe-5'>
                <p className={Styles.text}>light</p>
            </Col>
        </Row>
    </Container>
  )
}
