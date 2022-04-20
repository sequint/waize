import Webcam from 'react-webcam'
import { useState, useEffect, createElement } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { togglePhotoView, updatePhotoURL } from '../CapturedPhoto/capturedPhotoSlice'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import './Camera.css'
import { Stream } from 'stream'

const Camera = () => {
  const dispatch = useAppDispatch()
  const [ stream, setStream ] = useState({})

  // Set user media constraints to not get audio, and temp video as user facing
  const videoConstraints = {
    audio: false,
    facingMode: 'user'
  }

  // const videoStream = createElement(
  //   'video',
  //   {autoPlay: true, src: stream.getVideoTracks().id, muted: true, playsInline: true, style: {height: '93vh', width: '100%'}}
  //   )

  useEffect(() => {
    // Set a null variable to hold the media stream
    // let stream: any = []

    try {
      navigator.mediaDevices.getUserMedia(videoConstraints).then(mediaStream => {
        setStream(mediaStream)
        console.log(mediaStream.getVideoTracks())
      })
    }
    catch(err) { console.log(err) }

  }, [])

  return (
    <div className="webcamContainer">
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
