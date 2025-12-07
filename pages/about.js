import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Head from 'next/head'
import DrawBg from '../components/drawBg'
import {Marquee} from './haxor'
import {Modal} from '../pages/typography'

const variants = {
  initial: { 
    opacity: 0,
    y: '100vh',
    // top: '0',
    // position: 'absolute'
  },
  enter: { 
    opacity: 1,
    y: '0',
    // position: 'static',
    transition: {
      duration: .6,
      ease: [.61,.43,.12,.96]
    } 
  },
  exit: {
    opacity: 0,
    transition: {
      duration: .6,
      ease: [.61,.43,.12,.96]
    } 
  }
}

export default function About() {
  return (
    <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className="page-wrapper about-page"
    >
        <Head>
            <title>Wannacry</title>
        </Head>

        <div className="about-page-inner">
          <h1 className="page-title" style={{fontSize: '14.3vw'}}>Warning!</h1>
          <Link href="/" prefetch={false}><a className="back-link">&larr; 🏠 Home</a></Link>

          <Marquee right>
            <div>Important</div>
            <div>⚠️</div>
            <div>Please Read</div>
            <div>🚧</div>
          </Marquee>

          <p className="about-info">Your important files are encrypted. Many of you documents, photos, vidoes, databases and other files are no long accessible because they are encrypted. </p>


          <motion.div className="about-box" drag dragMomentum={false}>
            <h2>😡 DO NOT REDEEM!!!!</h2>
            <p>DO NOT REDEEM. YOU DIDN'T HAVE TO DO THAT. WHY DID YOU REDEEM IT!?</p>
          </motion.div>

          <section className="about-credits">
            <h2>Can I Recover My Files?</h2>

            <p>Sure. We guarantee that you can recover all your files safely and easily. But you have not so enough time. You only have have 3 days to submit the payment. Payment is accepted in Bitcoin only. For more information click <a href="https://youtu.be/dQw4w9WgXcQ?si=vyVM_N8LhDevqh4f" target="_blank">here</a>.</p>
          </section>

        </div>

        

        {/* <DrawBg/> */}


        {/* <Modal>
          <div className="about-draw-bg">
            <DrawBg/>
          </div>
        </Modal> */}
    </motion.div>
  )
}
