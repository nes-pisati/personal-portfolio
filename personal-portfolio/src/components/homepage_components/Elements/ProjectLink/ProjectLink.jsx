import React from 'react'
import { Col } from 'react-bootstrap'
import Styles from './ProjectLink.module.css'
import {Link} from 'react-router-dom'

export default function ProjectLink({ title, image, link }) {
    return (
        <Col xs={12}>
            <div className={`${Styles.project} d-flex justify-content-between align-items-center`}>
                <img src={image} alt='project image' className={Styles.projectImage}/>
                <h5 className={`${Styles.name} ps-5`}>{title}</h5>
                <Link className={`${Styles.name} ${Styles.link} pe-5`} to={link}>+</Link>
            </div>
        </Col>
    )
}
