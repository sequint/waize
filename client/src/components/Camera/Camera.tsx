import Webcam from 'react-webcam'
import { useAppDispatch } from '../../app/hooks'
import { togglePhotoView, updatePhotoURL } from '../CapturedPhoto/capturedPhotoSlice'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import './Camera.css'

const Camera = () => {
  const dispatch = useAppDispatch()

  const videoConstraints = {
    facingMode: "user"
  }

  return (
    <div className="webcamContainer">
      <Webcam
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
      </Webcam>
    </div>
  )
}

export default Camera
