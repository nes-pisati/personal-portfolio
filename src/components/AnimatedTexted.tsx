import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

type AnimatedTextedProps = {
    firstText: string
    secondText: string
}

import { forwardRef } from 'react'

const AnimatedTexted = forwardRef<HTMLDivElement[], AnimatedTextedProps>(
    ({ firstText, secondText }, refs) => {
        const [firstRef, secondRef] = refs as any

        return (
            <>
                <div ref={firstRef} className="absolute">
                    <p>{firstText}</p>
                </div>
                <div ref={secondRef} className="absolute">
                    <p>{secondText}</p>
                </div>
            </>
        )
    }
)

export default AnimatedTexted

// const AnimatedTexted = ({ firstText, secondText }: AnimatedTextedProps) => {
//     const containerRef = useRef<HTMLDivElement | null>(null)
//     const firstTextRef = useRef<HTMLDivElement | null>(null)
//     const secondTextRef = useRef<HTMLDivElement | null>(null)

//     useGSAP(() => {
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: containerRef.current,
//                 start: 'top top',
//                 end: '+=200%',
//                 scrub: true,
//                 pin: true,
//             },
//         })

//         tl
//             // FIRST TEXT IN
//             .fromTo(
//                 firstTextRef.current,
//                 { yPercent: 100, opacity: 0 },
//                 { yPercent: 0, opacity: 1, duration: 0.7, ease: 'power1.inOut' }
//             )

//             // FIRST TEXT OUT
//             .to(firstTextRef.current, {
//                 yPercent: -100,
//                 opacity: 0,
//                 duration: 1,
//                 ease: 'power4.inOut',
//             })

//             // SECOND TEXT IN
//             .fromTo(
//                 secondTextRef.current,
//                 { yPercent: 100, opacity: 0 },
//                 { yPercent: 0, opacity: 1, duration: 0.7, ease: 'power4.inOut', delay: 0.5 }
//             )

//             // SECOND TEXT OUT
//             .to(secondTextRef.current, {
//                 yPercent: -100,
//                 opacity: 0,
//                 duration: 0.3,
//                 ease: 'power4.inOut',
//             })
//     }, [])

//     return (
//         <div
//             ref={containerRef}
//             className="flex h-screen items-center justify-center flex-col overflow-hidden"
//         >
//             <div ref={firstTextRef} className="absolute">
//                 <p>{firstText}</p>
//             </div>

//             <div ref={secondTextRef} className="absolute">
//                 <p>{secondText}</p>
//             </div>
//         </div>
//     )
// }

