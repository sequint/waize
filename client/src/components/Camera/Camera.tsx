import { useRef, useState } from 'react'
import { useUserMedia, usePortraitRatio } from '../../hooks'
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
  // Set state for container height and ratio
  const [container, setContainer] = useState({ height: '93vh' })
  const [aspectRatio, setAspectRatio] = usePortraitRatio(1.777)

  // If there is a video stream live, a video element set, and no src on the object - then set a src equal to the mediaStream
  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream
  }

  // Plays video stream to handle canPlay prop of video element
  const handleCanPlay = () => {
    videoRef.current.play()
  }

  return (
    <div className="webCamContainer">
      <video ref={videoRef} onCanPlay={handleCanPlay} style={{ width: '100%' }} autoPlay playsInline muted />
    </div>
    
  )
}

export default Camera
