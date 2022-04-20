import { useRef, useState } from 'react'
import Measure from 'react-measure'
import { withContentRect } from 'react-measure'
import { useUserMedia, usePortraitRatio, useOffsets } from '../../hooks'
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
  const [container, setContainer] = useState({ height: 0, width: 0 })
  const [aspectRatio, calculateRatio] = usePortraitRatio(1.777)
  const offsets = useOffsets(
    videoRef.current && videoRef.current.videoWidth,
    videoRef.current && videoRef.current.videoHeight,
    container.width,
    container.height
  )

  // If there is a video stream live, a video element set, and no src on the object - then set a src equal to the mediaStream
  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream
  }

  // Set the container height to the full screen
  const handleResize = (contentRect: any) => {
    setContainer({
      height: Math.round(contentRect.bounds.height),
      width: Math.round(contentRect.bounds.width)
    })
  }

  // Plays video stream to handle canPlay prop of video element
  const handleCanPlay = () => {
    calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth)
    videoRef.current.play()
  }

  return (
    <Measure bounds onResize={handleResize}>
      {({ measureRef }) => (
        <div ref={measureRef} style={{ height: `${container.height}px`}}>
        <video
          ref={videoRef}
          onCanPlay={handleCanPlay}
          style={{ width: '100vw', height: '100vh' }}
          autoPlay
          playsInline
          muted />
      </div>
      )}
    </Measure>
  )
}

export default Camera
