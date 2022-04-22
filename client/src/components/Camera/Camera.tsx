import { useRef } from 'react'
import { useUserMedia } from '../../hooks'
import { useAppDispatch } from '../../app/hooks'
import { updateAverageColor } from './averageColorSlice'
import { updateInterval } from './intervalSlice'
import './Camera.css'

// Set constraints for video stream from user midea data (switch to environment facing after testing)
const videoConstraints = {
  audio: false,
  video: { facingMode: 'environment' }
}

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight * .93

const Camera = () => {
  const dispatch = useAppDispatch()

  // Create a video element using ref
  const videoRef: any = useRef()
  const mediaStream = useUserMedia(videoConstraints)
  const canvasRef: any = useRef()
  const canvas = canvasRef.current

  // If there is a video stream live, a video element set, and no src on the object
  // then set a src equal to the mediaStream
  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream
  }

  const getAverageColor = (colors: any) => {
    console.log(colors.data)
    // Initialize rbg values
    let totalColors = 0
    let rgbRed = 0
    let rgbGreen = 0
    let rgbBlue = 0

    // Create a for loop that iterates through every fourth position of the colors array
    for (let index = 0; index < colors.data.length; index += 4) {
      // Sum all values of red color
      rgbRed += colors.data[index]

      // Sum all values of green color
      rgbGreen += colors.data[index + 1]

      // Sum all values of blue color
      rgbBlue += colors.data[index + 2]

      // Increment the total number of values of rgb colors
      totalColors++
    }

    rgbRed = Math.floor(rgbRed / totalColors)
    rgbGreen = Math.floor(rgbGreen / totalColors)
    rgbBlue = Math.floor(rgbBlue / totalColors)

    // Update average color state
    dispatch(updateAverageColor(rgbBlue))

  }

  const createCanvasFromStream = () => {
    // const context = canvas.getContext('2d')
    // context.drawImage(videoRef.current, 0, 0, screenWidth, screenHeight)
    // getAverageColor(context.getImageData(0, 0, screenWidth, screenHeight))
    const interval = setInterval(() => {
      console.log('still in function')
      const context = canvas.getContext('2d')
      context.drawImage(videoRef.current, 0, 0, screenWidth, screenHeight)
      getAverageColor(context.getImageData(0, 0, screenWidth, screenHeight))
    }, 1000)
    dispatch(updateInterval(interval))
  }

  // Plays video stream to handle canPlay prop of video element
  // and create the canvas stream
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
