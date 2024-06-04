import { BsArrowRightShort } from '../Misc/Icons.collection'

const Skills = () => {
  return (
    <div className='my-16 px-3 font-sen text-white' id='skills'>
      <p className='text-3xl font-bold text-white'>Developing Skill Set</p>

      <div className='text-md my-8 flex flex-col font-medium custom:text-lg md:text-xl'>
        <p className='flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-gray-300 ring-zinc-300 duration-150 hover:scale-105 hover:ring-2'>
          <BsArrowRightShort size='30' />
          <span className='text-blue-400'>Java, Python, and JavaScript:</span>
          &nbsp; Main Languages
        </p>

        <p className='flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-gray-300 ring-zinc-300 duration-150 hover:scale-105 hover:ring-2'>
          <BsArrowRightShort size='30' />
          <span className='text-green-400'>Azure, AWS:</span>
          &nbsp; Cloud Providers
        </p>

        <p className='flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-gray-300 ring-zinc-300 duration-150 hover:scale-105 hover:ring-2'>
          <BsArrowRightShort size='30' />
          <span className='text-orange-400'>Azure AZ-900:</span>
          &nbsp; Certifications
        </p>

        <p className='flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-gray-300 ring-zinc-300 duration-150 hover:scale-105 hover:ring-2'>
          <BsArrowRightShort size='30' />
          <span className='text-pink-400'>
            ReactJS, NextJS, SwiftUI, StreamLit, HTML/CSS:
          </span>
          &nbsp; Frontend Frameworks
        </p>

        <p className='flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-gray-300 ring-zinc-300 duration-150 hover:scale-105 hover:ring-2'>
          <BsArrowRightShort size='30' />
          <span className='text-purple-400'>NodeJS, SpringBoot:</span>
          &nbsp; Backend Frameworks
        </p>

        <p className='flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-gray-300 ring-zinc-300 duration-150 hover:scale-105 hover:ring-2'>
          <BsArrowRightShort size='30' />
          <span className='text-yellow-400'>GraphQL, REST API:</span>
          &nbsp; Query Language and Architectural Style for APIs
        </p>

        <p className='flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-gray-300 ring-zinc-300 duration-150 hover:scale-105 hover:ring-2'>
          <BsArrowRightShort size='30' />
          <span className='text-cyan-400'>Kubernetes:</span>
          &nbsp; Containerization Frameworks
        </p>
      </div>

      <p className='text-lg font-medium text-gray-300'>
        ...actively learning
        <span className='text-yellow-400'> C/C++</span>,{' '}
        <span className='text-yellow-400'>JavaScript</span>,{' '}
        <span className='text-orange-400'>AZ-500</span>,{' '}
        <span className='text-blue-400'>Terraform</span>,{' '}
        <span className='text-green-400'>TensorFlow</span>,{' '}
        <span className='text-purple-400'>Docker</span>,{' '}
        <span className='text-orange-400'>MySQL</span>,{' '}
        <span className='text-white'>and</span>{' '}
        <span className='text-indigo-400'>Blockchain Creation</span>
      </p>
    </div>
  )
}

export default Skills
