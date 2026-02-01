import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import AnimatedTexted from '../AnimatedTexted'

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const firstTextRef = useRef<HTMLDivElement | null>(null)
    const secondTextRef = useRef<HTMLDivElement | null>(null)
    const circleRef = useRef<HTMLDivElement | null>(null)

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '+=150%',
                    scrub: true,
                    pin: true,
                },
            })

            tl
                .fromTo(firstTextRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
                .to(firstTextRef.current, { opacity: 0, duration: 1 })

                .fromTo(secondTextRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
                .to(secondTextRef.current, { opacity: 0, duration: 1 })

                .fromTo(
                    circleRef.current,
                    { scale: 0 },
                    { scale: 30, duration: 1, ease: 'none' }
                )
        },
        { scope: sectionRef }
    )

    return (
        <section
            ref={sectionRef}
            className="relative h-screen overflow-hidden flex items-center justify-center"
        >
            <AnimatedTexted
                ref={[firstTextRef, secondTextRef] as any}
                firstText="Hello there"
                secondText="This isn't General Kenobi speaking. My name is Vanessa and this is my portfolio."
            />

            <div ref={circleRef} className="circle" />
        </section>
    )
}
