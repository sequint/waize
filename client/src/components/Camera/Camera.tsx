import { useRef } from 'react'
import { useUserMedia } from '../../hooks'
import './Camera.css'

// Set constraints for video stream from user midea data (switch to environment facing after testing)
const videoConstraints = {
  audio: false,
  video: { facingMode: 'environment' }
}

const Camera = () => {
  // Create a video element using ref
  const videoRef: any = useRef()
  const mediaStream = useUserMedia(videoConstraints)
  const canvasRef: any = useRef()
  const canvas = canvasRef.current

  // If there is a video stream live, a video element set, and no src on the object - then set a src equal to the mediaStream
  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream
  }

  const createCanvasFromStream = () => {
    setInterval(() => {
      const context = canvas.getContext('2d')
      context.drawImage(videoRef.current, 0, 0, 200, 200)
      // console.log(context.getImageData(0, 0, 20, 20))
    }, 1)
  }

  // Plays video stream to handle canPlay prop of video element
  const handleCanPlay = () => {
    videoRef.current.play()
    createCanvasFromStream()
  }

  return (
    <>
      <video
        ref={videoRef}
        onCanPlay={handleCanPlay}
        className="streamScreen"
        autoPlay
        playsInline
        muted
      />
      <canvas
        ref={canvasRef}
        className="canvasStyle"
      />
    </>
  )
}

export default Camera
