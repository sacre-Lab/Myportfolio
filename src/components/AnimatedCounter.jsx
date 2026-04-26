import React from 'react'
import { counterItems } from '../constants/index'
import CountUp from 'react-countup'
const AnimatedCounter = ( ) => {
    return (
        <div id="counter" className='padding-x-lg xl:mt-30 mt-58'>
            <div className='mx-auto grid-4-cols'>
            {counterItems.map((item) => (
                <div key={item.label} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
                    <div key={counterItems.label} className='counter-number text-white text-5xl font-bold mb-2'>
                         
                        <CountUp suffix= {item.suffix} end={item.value} />
                    </div>
                    <div className='text-white-50 text-lg'>{item.label}</div>
                </div>
            ))}

            <img
                            src='/images/cutme.jpg'
                            alt='Profile'
                            className='w-50 h-50 rounded-full border-white-50 object-cover object-top'
                        />
                        <p className='text-white-50 md:text-xl relative z-10
                        pointer-events-none'>
                            Hi, I'm Sacré, a software engineer based in DRC with a passion for code, AI and Cybersecurity.
                        </p>
            </div>
        </div>

        
    )
}
export default AnimatedCounter