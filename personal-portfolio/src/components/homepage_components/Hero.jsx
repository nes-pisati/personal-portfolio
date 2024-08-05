import React from 'react'
import Styles from './Homepage.module.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Hero() {
  return (
    <Container fluid className={Styles.section}>
      <Row>
        <Col lg={9}>
          <h1 className={Styles.title}>Hello <br></br> world</h1>
        </Col>
        <Col lg={2} className='d-flex align-items-end'>
          <p className={Styles.subtitle}>MY NAME IS <br></br>VANESSA AND I’M A <br></br> NEURODIVERGENT <br></br>WEB DEVELOPER</p>
        </Col>
      </Row>
    </Container>
  )
}
