import Webcam from 'react-webcam'
import { useAppDispatch } from '../../app/hooks'
import { togglePhotoView } from '../CapturedPhoto/capturedPhotoSlice'
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
