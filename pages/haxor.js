import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Head from 'next/head'
import classNames from 'classnames'

import LayoutScatter from '../components/layoutScatter'
import FourQuads from '../components/fourQuads'

const variants = {
  initial: { 
    opacity: 0,
    y: '100vh',
  },
  enter: { 
    opacity: 1,
    y: '0',
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

export function Marquee({right, children, className}) {
    return (
        <div className={classNames("marquee-wrapper", className, {"marquee-right": right})}>
            <div className="marquee-inner">
                {[...Array(4)].map(() => (
                    [...children]
                ))}
            </div>
            <div className="marquee-inner">
                {[...Array(4)].map(() => (
                    [...children]
                ))}
            </div>
        </div>
    )
}


export default function Home() {

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // }, [])

  // function handleScroll(e) {
  //   console.log(window.scrollY)
  //   document.querySelector('.page-title').style.position = 'absolute'
  //   document.querySelector('.page-title').style.top = window.scrollY * 2
  //   document.querySelector('.page-title').style.transform = `scale(${ (window.innerHeight / window.scrollY) * 0.1})`
  // }

  return (
    <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className="page-wrapper"
    >
        <Head>
            <title>1337 Website</title>
        </Head>
        <h1 className="page-title">HAXOR</h1>
        <Link prefetch={false} href="/"><a className="back-link">&larr; 🏠 Home</a></Link>
        
        <div>
            <section className="subpage_section section_layout_grid">
                <div>1337</div>
                <div>WEBSITE</div>
                <div></div>
                <div></div>
                <div>1</div>
                <div>3</div>
                <div>3</div>
                <div>7</div>
                <div></div>
                <div></div>
                <div>🐱‍💻</div>
                <div>Haxor Cat</div>
                <div></div>
                <div>PWNED</div>
                <div></div>
                <div></div>
            </section>
            <LayoutScatter/>

            <section className="subpage_section section_layout_marquee">
              <Marquee>
                <div>👋</div>
                <div>hello</div>
                <div>🌏</div>
                <div>world</div>
            </Marquee>
            <Marquee right>
                <div>HACKED&nbsp;</div>
                <div>HACKED&nbsp;</div>
                {/* <div>marquee&nbsp;</div>
                <div>marquee&nbsp;</div> */}
            </Marquee>
            <Marquee>
                <div>HAXOR</div>
                <div>⚠️</div>
                <div>vibes</div>
                <div>🚧</div>
            </Marquee>
            <Marquee right>
                <div>Microsoft</div>
                <div>⚠️</div>
                <div>Support</div>
                <div>🚧</div>
            </Marquee>

            <Marquee className="marquee-diagonal">
                <div>Virus</div>
                <div>⚠️</div>
                <div>Alert</div>
                <div>🚧</div>
            </Marquee>

            </section>

            <FourQuads/>
            <Marquee>
                <div style={{fontSize: '3vw', fontWeight: 'bold'}}>1337&nbsp;</div>
                <div style={{fontSize: '3vw', fontWeight: 'bold'}}>1337&nbsp;</div>
            </Marquee>

            <section className="subpage_section section_layout_two_cols">
                <div>
                  <h2>WARNING</h2>
                  <h2>USER DETECTED</h2>
                  <p>This site runs on pure vibes and duct tape.</p>
                </div>
                <div>
                  {/* <h2 style={{textAlign: 'right'}}>COLUMNS</h2> */}
                  <h2 style={{textAlign: 'right', writingMode: 'vertical-rl', float: 'right'}}>WIFI</h2>
                  <h2 style={{textAlign: 'right', writingMode: 'vertical-rl', float: 'right'}}>WIZARD</h2>
                  <h2>🖥️</h2>
                  <h2>⌨️</h2>
                  <h2>🖱️</h2>
                  <h2>🧙‍♂️</h2>
                  <h2 style={{textAlign: 'right', fontSize: '4vw'}}>INTERNET 🌐</h2>
                  <p>This page is perfectly safe, unless it isn’t.</p>
                  
                </div>

            </section>
        </div>
    </motion.div>
  )
}
