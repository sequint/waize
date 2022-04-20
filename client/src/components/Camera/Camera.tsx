import Webcam from 'react-webcam'
import { useState, createElement } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { togglePhotoView, updatePhotoURL } from '../CapturedPhoto/capturedPhotoSlice'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import './Camera.css'
import { Stream } from 'stream'

const Camera = () => {
  const dispatch = useAppDispatch()
  const [ stream, setStream ] = useState({})

  const videoStream = createElement(
    'video',
    {autoPlay: true, src: stream, style: {height: '100vh', width: '100%'}}
    )

  const getStream: any = () => {
    // Set a null variable to hold the media stream
    // let stream: any = []

    // Set user media constraints to not get audio, and temp video as user facing
    const videoConstraints = {
      audio: false,
      video: true
    }

    try {
      navigator.mediaDevices.getUserMedia(videoConstraints).then(mediaStream => {
        setStream(mediaStream)
        console.log(stream)
        return stream
      })
    }
    catch(err) { console.log(err) }
    console.log(stream)

    return stream
  }

  return (
    <div className="webcamContainer" onClick={getStream}>
      {videoStream}
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
