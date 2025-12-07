import {useEffect, useState, useRef} from 'react'

import {motion} from 'framer-motion'

const images = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/SiegedSec_Telegram_icon.jpg", 
    "https://www.w3schools.com/tags/img_the_scream.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Funny-Cat_A-cat-at-work_63172-480x360_%284791796627%29.jpg/640px-Funny-Cat_A-cat-at-work_63172-480x360_%284791796627%29.jpg",
    "https://imgs.xkcd.com/comics/duty_calls.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pennsylvania_2007_license_plate_1337.jpg/640px-Pennsylvania_2007_license_plate_1337.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Typing_dog.JPG/640px-Typing_dog.JPG"
]

const onDrag = (event, info) => {
  document.querySelector('.scatter_drag').classList.add('dragging')
};
const offDrag = (event, info) => {
  document.querySelector('.scatter_drag').classList.remove('dragging')
};

const Image = ({src, count}) => {
    const [xy, setXy] = useState({x: 0, y: 0})
    const imgRef = useRef();

    useEffect(() => {
        setXy({
            x: Math.max(0, Math.floor(Math.random() * window.innerWidth - imgRef.current.offsetWidth)), 
            y: Math.max(0, Math.floor(Math.random() * window.innerHeight - imgRef.current.offsetHeight))
        })

        imgRef.current.style.setProperty('transform', '0px 0px')
    }, [count]);

    return (
        <motion.img 
            ref={imgRef}
            drag dragMomentum={false}
            src={src} 
            key={src} 
            onDragStart={onDrag} onDragEnd={offDrag}
            style={{
                position: 'absolute',
                top: xy.y,
                left: xy.x
            }}
        />
    )
}

export default function LayoutScatter() {
    const [z, setZ] = useState(1)
    const [count, setCount] = useState(1)

    const onClick = (event) => {
        setZ(z + 1)
        event.target.style.zIndex = z;
    }

    return (
        <section className="subpage_section section_layout_scatter">

            <h1>GLITCH</h1>
            <button onClick={() => setCount(count + 1)}>🔄 RELOAD</button>

            <div className="scatter_drag">H4X!!!</div>
            
            {images.map(image => (
                <div key={image} onMouseDown={onClick}>
                    <Image src={image} count={count}/>
                </div>
            ))}

        </section>
    )
}
