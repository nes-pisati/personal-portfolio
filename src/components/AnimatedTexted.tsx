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
