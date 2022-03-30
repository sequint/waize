import { useState } from 'react'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded'
import VideoCameraBackRoundedIcon from '@mui/icons-material/VideoCameraBackRounded'
import Webcam from 'react-webcam'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import './Camera.css'

const cameraOptions = [
  {
    icon: <CameraAltRoundedIcon />,
    name: 'Photo',
    prompt: 'Click anywhere to take a photo'
  },
  {
    icon: <VideoCameraBackRoundedIcon />,
    name: 'Video',
    prompt: 'Click anywhere to start recording'
  }
]

const Camera = () => {
  //**** CAMERA TOGGLE STATES AND FUNCTIONS ****//
  
  // Initialize state values for toggling between photo or video
  // const [cameraType, setCameraType] = useState({
  //   icon: cameraOptions[1].icon,
  //   name: cameraOptions[1].name,
  //   prompt: cameraOptions[1].prompt
  // })
  // const [open, setOpen] = useState(false)
  // // Handle speed dial open and close values on click
  // const handleOpen = () => setOpen(true)
  // const handleClose = () => setOpen(false)

  // const handleCameraOptionClick = (option: any) => {
  //   // Set the camera type state with option passed from the click and close options
  //   setCameraType({ icon: option.icon, name: option.name, prompt: option.prompt })
  //   handleClose()
  // }
  

  //**** CAMERA OPERATIONS STATES AND FUNCTIONS ****//
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
    // <div className="cameraContainer">
    //   <h4 className="cameraPrompt">{cameraType.prompt}</h4>
    //   <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }} className="optionsBox">
    //     <SpeedDial
    //       ariaLabel="SpeedDial basic example"
    //       sx={{ position: 'absolute', bottom: 16, right: 16 }}
    //       icon={cameraType.icon}
    //       onClose={handleClose}
    //       onOpen={handleOpen}
    //       open={open}
    //       onClick={(e) => e.stopPropagation()} // Prevents icon clicks from camera action
    //     >
    //       {cameraOptions.map((option) => (
    //         <SpeedDialAction
    //           key={option.name}
    //           icon={option.icon}
    //           tooltipTitle={option.name}
    //           onClick={() => {
    //             handleCameraOptionClick(option)
    //           }}
    //         />
    //       ))}
    //     </SpeedDial>
    //   </Box>
    // </div>
  )
}

export default Camera
