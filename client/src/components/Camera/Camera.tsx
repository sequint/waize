import { useRef, useState } from 'react'
import { useUserMedia } from '../../hooks/useUserMedia'
import './Camera.css'

// Set constraints for video stream from user midea data (switch to environment facing after testing)
const videoConstraints = {
  audio: false,
  video: { facingMode: 'user' }
}

const Camera = () => {
  // Create a video element using ref
  const videoRef: any = useRef()
  const mediaStream = useUserMedia(videoConstraints)

  // If there is a video stream live, a video element set, and no src on the object - then set a src equal to the mediaStream
  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream
  }

  return (
    <></>
  )
}

export default Camera
