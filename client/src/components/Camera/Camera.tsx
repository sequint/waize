import Webcam from 'react-webcam'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import './Camera.css'

const Camera = () => {

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
