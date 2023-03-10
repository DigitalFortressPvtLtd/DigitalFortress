import React, { useEffect, useRef } from 'react'
import '../App.css'
import Lottie from 'lottie-web';

function Loding() {

    const container = useRef(null)

    useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./face_id.json')
    })
  }, [])

    return (
        <div>
            <div className="loader">
                <div className="loding_container" ref={container}></div>
        </div>
        </div>
    )
}

export default Loding
