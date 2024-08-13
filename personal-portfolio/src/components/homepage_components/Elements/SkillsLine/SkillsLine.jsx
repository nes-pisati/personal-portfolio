import React from 'react'
import Styles from './SkillsLine.module.css'
import {Col} from 'react-bootstrap'

export default function SkillsLine({text}) {
  return (
    <Col lg={12} className={Styles.skillsText}>
        {text}
    </Col>
  )
}
