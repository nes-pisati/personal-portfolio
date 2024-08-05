import React from 'react'
import Styles from './NavFoot.module.css'
import {Container, Row, Col} from 'react-bootstrap'

export default function Footer() {
  return (
    <Container fluid className={Styles.footer}>
        <Row className='d-flex justify-content-between'>
            <Col lg={4} className='ps-5'>
                <p className={Styles.text}>Contact me!</p>
            </Col>
            <Col lg={4} className='d-flex justify-content-end pe-5'>
                <p className={Styles.text}>pisati.vanessa@gmail.com</p>
            </Col>
        </Row>
    </Container>
  )
}
