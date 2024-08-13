import React from 'react'
import Styles from './Homepage.module.css'
import { Container, Row} from 'react-bootstrap'
import SkillsLine from './Elements/SkillsLine/SkillsLine'

export default function Skills() {
  return (
    <Container fluid className={Styles.section}>
      <Row>
        <SkillsLine text={"HTML5 + CSS + JAVASCRIPT + REACT + BOOTSTRAP + NODEJS + EXPRESS + MONGODB  + JIUJITSU + SPEAK ENGLISH + SPEAK PORTUGUESE + SPEAK SPANISH  + SOMETHING TO SAY ABOUT BRANDING STUFF"}/>
      </Row>
    </Container>
  )
}
