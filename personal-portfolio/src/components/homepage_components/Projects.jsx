import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectLink from './Elements/ProjectLink/ProjectLink'
import Styles from './Homepage.module.css'
import ModìImage from '../../assets/modì-img.avif'

export default function Projects() {
    return (
        <Container fluid className={Styles.section}>
            <Row>
                <h5 className={`${Styles.ProjectTitle} ps-5`}>Personal Projects</h5>
            </Row>
            <Row className={Styles.ProjectList}>
                <ProjectLink
                    title={"Modì"}
                    image={ModìImage}
                    link={"/project/modì"}
                />
                <ProjectLink 
                    title={"Personal Portfolio"}
                    image={"https://picsum.photos/200/300"}
                />
            </Row>
        </Container>
    )
}
