'use client';
import { Typewriter } from "react-simple-typewriter"

const TypeWriterComponent = () => {
  return (
    <div className="flex flex-col gap-y-4 items-start font-bold text-primary text-4xl md:text-5xl">
        <div>Connecting You to</div>
        <div className="">
            Every
            <span className="">
                <Typewriter
                    words={['thing', 'where']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={120}
                    deleteSpeed={120}
                    delaySpeed={1000}
                />
            </span>
        </div>
    </div>
  )
}

export default TypeWriterComponent
