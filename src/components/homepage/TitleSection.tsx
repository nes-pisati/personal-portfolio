import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function TitlesSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const imaTextRef = useRef<HTMLParagraphElement | null>(null)
    const mainTitleOne = useRef<HTMLHeadingElement | null>(null)
    const mainTitleTwo = useRef<HTMLHeadingElement | null>(null)

    useGSAP(
        () => {
            const firstTl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: '+=150%',
                    scrub: 0.4,
                },
            })

            firstTl
                .fromTo(imaTextRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
                .fromTo(
                    mainTitleOne.current,
                    { xPercent: 200 },
                    { xPercent: -200, duration: 2, ease: 'none' },
                    '+=0.2'
                )
                .fromTo(
                    mainTitleTwo.current,
                    { xPercent: -200 },
                    { xPercent: 200, duration: 2, ease: 'none' },
                    '<'
                )
        },
        { scope: sectionRef }
    )

    return (
        <section
            ref={sectionRef}
            className="h-screen flex flex-col items-center justify-center bg-beige"
        >
            <p ref={imaTextRef} className="text-black mb-8">
                I'm a
            </p>

            <div className="relative w-full bg-pink flex flex-col items-center leading-none">
                <h1
                    ref={mainTitleOne}
                    className="main-title-big title-black whitespace-nowrap -mb-6"
                >
                    FRONTEND
                </h1>

                <h1
                    ref={mainTitleTwo}
                    className="main-title-big title-black whitespace-nowrap"
                >
                    DEVELOPER
                </h1>
            </div>
            <div>
                <p>Passionate</p>
                <p>Design Driven</p>
                <p>... but still a Padawan, tho.</p>
            </div>
        </section>
    )
}
