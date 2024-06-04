import type { NextComponentType } from 'next'
import Link from 'next/link'

const Projects: NextComponentType = () => {
  return (
    <div className='my-16 px-3 font-sen' id='projects'>
      <p className='text-3xl font-bold text-white'>Featured Projects</p>
      <div className='my-8 flex flex-col items-center justify-center gap-10 sm:flex-row'>
        <Link href='https://github.com/krith-raju/SEC10kFilings' passHref legacyBehavior>
          <a
            className='h-auto w-[20rem] cursor-pointer rounded-lg bg-gradient-to-r from-yellow-500 to-blue-500 p-1 text-white duration-100 hover:scale-105'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex h-full w-full flex-col justify-between rounded-lg bg-black px-4 py-6 text-center font-medium hover:bg-yellow-600'>
              <p className='text-xl font-semibold'>LLM Risk Factor Analysis</p>
              <p className='mt-2'>
                SEC 10K Filings <br />
                Built in Python w/ Langchain Schemas and StreamLit
              </p>
            </div>
          </a>
        </Link>

        <Link href='https://github.com/krith-raju/PolyGlot_AI_Treehacks_2024' passHref legacyBehavior>
          <a
            className='h-auto w-[20rem] cursor-pointer rounded-lg bg-gradient-to-r from-yellow-500 to-blue-500 p-1 text-white duration-100 hover:scale-105'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex h-full w-full flex-col justify-between rounded-lg bg-black px-4 py-6 text-center font-medium hover:bg-yellow-600'>
              <p className='text-xl font-semibold'>PolyGlotAI</p>
              <p className='mt-2'>
                SpeechToSpeech Learning Platform <br />
                Built at TreeHacks Using Python and Reflex
              </p>
            </div>
          </a>
        </Link>

        <Link href='https://github.com/krith-raju/GraphQL_MERN_MGMT' passHref legacyBehavior>
          <a
            className='h-auto w-[20rem] cursor-pointer rounded-lg bg-gradient-to-r from-yellow-500 to-blue-500 p-1 text-white duration-100 hover:scale-105'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='flex h-full w-full flex-col justify-between rounded-lg bg-black px-4 py-6 text-center font-medium hover:bg-yellow-600'>
              <p className='text-xl font-semibold'>GraphQL MGMT APP</p>
              <p className='mt-2'>
                Management App <br />
                Written based on MERN Stack
              </p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Projects
