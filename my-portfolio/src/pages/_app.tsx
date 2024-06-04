import type { AppProps } from 'next/app'
import '../styles/globals.css'

import '@fontsource/jost/400.css'
import '@fontsource/jost/500.css'
import '@fontsource/jost/600.css'
import '@fontsource/jost/700.css'
import '@fontsource/sen/400.css'
import '@fontsource/sen/700.css'

import { NextSeo } from 'next-seo'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title='Krithanjay | Software Engineer Intern'
        titleTemplate='Krithanjay | Software Engineer Intern, Student, and Reseacher'
        defaultTitle='Krithanjay | Software Engineer Intern, Student, and Researcher'
        description="Hey! I'm Krithanjay, A Software Enginner, Student, and Researcher!"
        openGraph={{
          url: 'https://krithuraju.dev',
          title: 'Krithanjay | Software Engineer Intern, Student, and Research',
          description:
            "Hey! I'm Krithanjay, A Software Engineer Intern, Student, and Researcher!",
        }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content:
              'Backend Developer, krithuraju, Krithanjay Raju, Frontend Developer, web development, open source',
          },
        ]}
      />
      <Head>
        <link rel='icon' type='image/png' href='/assets/me.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
