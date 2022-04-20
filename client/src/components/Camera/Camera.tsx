import Webcam from 'react-webcam'
import { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { togglePhotoView, updatePhotoURL } from '../CapturedPhoto/capturedPhotoSlice'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import { ColorGrid } from '..'
import './Camera.css'

const Camera = () => {
  const dispatch = useAppDispatch()
  const [ media, setMedia ] = useState({})

  const videoConstraints = {
    facingMode: "user"
  }

  // polyfill based on https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
  const getMediaDevices = () => {
    console.log('In function')
    if (typeof window === 'undefined') { return }

    // Older browsers might not implement mediaDevices at all, so we set an empty object first
    if (navigator.mediaDevices === undefined) {
      setMedia({})
      console.log('No media devices available on this browser')
    }
    else {
      setMedia(navigator.mediaDevices)
      console.log(media)
    }
  }

  return (
    <div className="webcamContainer" onClick={getMediaDevices}>
      {/* <ColorGrid /> */}
      {/* <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="cameraField"
      >
        {({ getScreenshot }) => (
          <div
            onClick={() => {
              const imageSrc = getScreenshot()
              console.log(imageSrc)
              dispatch(togglePhotoView())
              dispatch(updatePhotoURL(imageSrc))
            }}
            className="cameraButton"
          >
            <RadioButtonCheckedIcon sx={{ fontSize: 80 }} />
          </div>
        )}
      </Webcam> */}
    </div>
  )
}

export default Camera
