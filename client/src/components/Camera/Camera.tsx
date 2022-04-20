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

  const getStream: any = () => {
    // Set a null variable to hold the media stream
    let stream = null

    // Set user media constraints to not get audio, and temp video as user facing
    const videoConstraints = {
      audio: false,
      video: {
        facingMode: 'user'
      }
    }

    try {
      stream = navigator.mediaDevices.getUserMedia(videoConstraints)
      console.log(stream)
    }
    catch(err) { console.log(err) }

    return stream
  }

  return (
    <div className="webcamContainer" onClick={getStream}>
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
