import Webcam from 'react-webcam'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { togglePhotoView, selectPhotoView } from '../CapturedPhoto/capturedPhotoSlice'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import { CapturedPhoto } from '..'
import './Camera.css'

const Camera = () => {
  const open = useAppSelector(selectPhotoView)
  const dispatch = useAppDispatch()

  const videoConstraints = {
    facingMode: "user"
  }

  return (
    <div className="webcamContainer">
      <CapturedPhoto />
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
              console.log(open)
              dispatch(togglePhotoView)
              console.log(open)
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
