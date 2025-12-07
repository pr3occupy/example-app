import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Head from 'next/head'
import classNames from 'classnames'

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

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString('en-US'));
    }, 1000);
  }, []);

  return <div className="clock">{clockState}</div>;
}

function Window({title, url, onMouseDown, close}) {
  const [fullScreen, setFullScreen] = useState(false)
  const [dragging, setDragging] = useState(false)

  return (
    <motion.div onMouseDown={onMouseDown} className={classNames("window", {"fullscreen": fullScreen})} drag dragMomentum={false} onDragStart={()=> setDragging(true)} onDragEnd={()=> setDragging(false)}>
      <div className="toolbar">
        <h3>{title}</h3>

        {(title !== "☄️ Motion Trail") && 
          <button onClick={()=> setFullScreen(!fullScreen)}>{fullScreen? 'small' : 'maximize'}</button>
        }

        <button onClick={close}>close</button>
      </div>

      {dragging && <p className="dragging-text">DRAGGING</p>}
      <iframe className={classNames({'dragging': dragging})} src={url} frameborder="0"></iframe>

    </motion.div>
  )
}

export default function Interaction() {
  const [showDVD, setShowDVD] = useState(false)
  const [showSmear, setSmear] = useState(false)
  const [showCylinder, setCylinder] = useState(false)
  const [motionText, setMotionText] = useState(false)
  const [cursorCubes, setCursorCubes] = useState(false)
  const [toasters, setToasters] = useState(false)

  const [z, setZ] = useState(1)
  const updateZ = (event) => {
    setZ(z + 1)
    event.currentTarget.style.zIndex = z;
  }

  return (
    <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        className="page-wrapper interaction-page"
    >
        <Head>
            <title>Interaction</title>
        </Head>
        <h1 className="page-title" style={{fontSize: '14.5vw'}}>GHADI</h1>
        <Link href="/" prefetch={false}><a className="back-link">&larr; 🏠 Home</a></Link>

        <div className="icons">
          <div className="desktop-icon" onClick={() => setShowDVD(true)}>
            <div className="icon">💿</div>
            <div className="title">DVD</div>
          </div>

          <div className="desktop-icon" onClick={() => setSmear(true)}>
            <div className="icon">🖼️</div>
            <div className="title">XP</div>
          </div>

          <div className="desktop-icon" onClick={() => setMotionText(true)}>
            <div className="icon">☄️</div>
            <div className="title">Effect</div>
          </div>
          </div>

       

        {showDVD && <Window onMouseDown={updateZ} close={()=> setShowDVD(false)} title="💿 DVD" url="/interaction/dvd"/>}
        {showSmear && <Window onMouseDown={updateZ} close={()=> setSmear(false)} title="🖼️ XP" url="/interaction/image-smear"/>}
        {motionText && <Window onMouseDown={updateZ} close={()=> setMotionText(false)} title="☄️ Effect" url="/interaction/motion-trail"/>}
        <Clock/>
    </motion.div>
  )
}
