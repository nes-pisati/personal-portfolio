import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import AnimatedTexted from '../components/AnimatedTexted'

gsap.registerPlugin(ScrollTrigger)

function Homepage() {
  const heroContainerRef = useRef<HTMLDivElement | null>(null)
  const firstTextRef = useRef<HTMLDivElement | null>(null)
  const secondTextRef = useRef<HTMLDivElement | null>(null)
  const circleRef = useRef<HTMLDivElement | null>(null)
  const mainTitleOne = useRef<HTMLHeadingElement | null>(null)
  const mainTitleTwo = useRef<HTMLHeadingElement | null>(null)
  const imaTextRef = useRef<HTMLParagraphElement | null>(null)
  const textesContainerRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    /* =========================
       TIMELINE 1 – HERO + CIRCLE
    ========================== */
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainerRef.current,
        start: 'top top',
        end: '+=150%',
        scrub: true,
        pin: true,
      },
    })

    heroTl
      .fromTo(firstTextRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .to(firstTextRef.current, { opacity: 0, duration: 1 })

      .fromTo(secondTextRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .to(secondTextRef.current, { opacity: 0, duration: 1 })

      .fromTo(
        circleRef.current,
        { scale: 0 },
        { scale: 30, duration: 1, ease: 'none' }
      )

    /* =========================
       TIMELINE 2 – TEXTES
    ========================== */

    const textesTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroContainerRef.current,
        start: '10% top',
        end: '+=100%',
        scrub: 0.4,
        anticipatePin: 1,
      },
    })

    textesTl
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

  }, [])

  return (
    <>
      {/* HERO */}
      <section
        ref={heroContainerRef}
        className="relative h-screen overflow-hidden flex items-center justify-center"
      >
        <AnimatedTexted
          ref={[firstTextRef, secondTextRef] as any}
          firstText="Hello there"
          secondText="This isn't General Kenobi speaking. My name is Vanessa and this is my portfolio."
        />

        <div ref={circleRef} className="circle" />
      </section>

      {/* SECTION TITLES */}
      <section
        ref={textesContainerRef}
        className="h-screen flex items-center justify-start flex-col justify-center bg-beige"
      >
        <p ref={imaTextRef} className="text-black mb-8">
          I'm a
        </p>

        <div className="relative overflow-hidden w-full h-fit bg-pink flex flex-col items-center leading-none">
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
          <p ref={imaTextRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>

      </section>

      <section className="min-h-screen bg-beige flex items-center justify-center">
        <p className="text-2xl">Next section</p>
      </section>

    </>
  )
}

export default Homepage
