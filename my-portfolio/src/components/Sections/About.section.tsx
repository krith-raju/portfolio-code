import type { NextComponentType } from 'next'
import Image from 'next/image'

const About: NextComponentType = () => {
  return (
    <div className='my-8 flex flex-row items-center justify-between px-3 font-sen'>
      <div>
        <p className='text-3xl font-bold text-white'>Krithanjay</p>
        <p className='mt-1 text-lg text-gray-300'>
          Software Developer Intern, Student and Researcher
        </p>
        <p className='mt-3 text-gray-400'>Georgia Institute of Technology</p>
        <p className='mt-4 text-indigo-300'>
          GT FSIL Researcher, Traverse Development Engineer, Mobicip Computer Vision Intern
        </p>
      </div>

      <div className='hidden scale-[1.3] duration-150 hover:scale-[1.5] custom:block'>
        <div className='rounded-full overflow-hidden'>
          <Image
            src='/assets/me.png'
            width='112'
            height='112'
            className='rounded-full'
            alt='avatar'
          />
        </div>
      </div>
    </div>
  )
}

export default About
