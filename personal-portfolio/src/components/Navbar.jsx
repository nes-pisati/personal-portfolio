import React, { useContext, useEffect } from 'react'
import Styles from './NavFoot.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeContext } from '../context/ThemeContext'

export default function Navbar() {

    const {isDarkMode, toggleIsDarkMode} = useContext(ThemeContext)

    useEffect(()=>{
        const bodyClass = isDarkMode? Styles.darkMode : Styles.lightMode;
        document.body.className = bodyClass;
    },[isDarkMode])

    return (
        <Container fluid className={Styles.nav}>
            <Row className='d-flex align-items-center'>
                <Col lg={4} className='ps-5'>
                    <p className={Styles.text}>Vanessa Pisati</p>
                </Col>
                <Col lg={4} className='d-flex justify-content-center'>
                    <p className={Styles.text}>Web developer</p>
                </Col>
                <Col lg={4} className='d-flex justify-content-end pe-5'>
                    <button className={`${Styles.btn} d-flex justify-content-between`} onClick={toggleIsDarkMode}>
                        <i className="bi bi-moon-stars text-light"></i>
                        <i className="bi bi-sun"></i>
                    </button>
                </Col>
            </Row>
        </Container>
    )
}
