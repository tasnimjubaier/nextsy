import Head from 'next/head'
import { useRef } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import BouncingText from '../shared/components/BouncingText/BouncingText'
import Brand from '../shared/components/Brand/Brand'
import ConnectBoard from '../shared/components/ConnectBoard/ConnectBoard'
import Drawing from '../shared/components/Drawing/Circle/Drawing'
import FancyText from '../shared/components/FancyText/FancyText'
import Faq from '../shared/components/Faq/Faq'
import GoogleChart from '../shared/components/GoogleChart/GoogleChart'
import HoverBoard from '../shared/components/HoverBoard/HoverBoard'
import LandingPage from '../shared/components/LandingPage/LandingPage'
import LiquidDiv from '../shared/components/LiquidDiv/LiquidDiv'
import MainWrapper from '../shared/components/MainWrapper/MainWrapper'
import Navbar from '../shared/components/Navbar/Navbar'
import Playground from '../shared/components/Playground/Playground'
import Playground2 from '../shared/components/Playground2/Playground2'
import { Projects } from '../shared/components/Projects/Projects'
import Testimonials from '../shared/components/Testimonials/Testimonials'


const getMain = () => {
  return (
    <main>
        <Navbar />
        <section id='landingpage'>
          <LandingPage />
        </section>
        <section id='hover'>
          {/* <HoverBoard /> */}
          <ConnectBoard />
        </section>
        <section id='playground'>
          <Testimonials />
          {/* <Playground /> */}
        </section>
        <section id='faq'>
          <Projects />
          {/* <Faq /> */}
        </section>
        <section id='faq'>
          <Projects />
          {/* <Faq /> */}
        </section>
        <section id='faq'>
          <LiquidDiv />
        </section>
        <section id='faq'>
          <MainWrapper back={"black"}>
            <FancyText text={"Sadia Padia gondo korce"} />
          </MainWrapper>
        </section>
        <section id='faq'>
          <MainWrapper back={"white"}>
            <BouncingText text={"Sadia Padia gondo korce"} />
          </MainWrapper>
        </section>
        <section id='faq'>
          <Drawing />
        </section>
        
        {/* <Brand /> */}
        {/* <Playground2 /> */}

        {/* <GoogleChart /> */}
      </main>
  )
}


export default function Home() {

  return (
    <div>
      <Head>
        <title>Nextsy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Dancing+Script:wght@700&family=Rubik+Distressed&display=swap" rel="stylesheet" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {getMain()} 

    </div>
  )
}

