import React from 'react'
import Hero from '../components/homepage_components/Hero'
import Skills from '../components/homepage_components/Skills'
import Projects from '../components/homepage_components/Projects'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function Homepage() {

  const Section = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1
    })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Skills />
      </Section>
      <Section>
        <Projects />
      </Section>
    </>
  )
}
