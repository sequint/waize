import { useState } from 'react'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded'
import VideoCameraBackRoundedIcon from '@mui/icons-material/VideoCameraBackRounded'
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
  const [cameraType, setCameraType] = useState({
    icon: cameraOptions[1].icon,
    name: cameraOptions[1].name,
    prompt: cameraOptions[1].prompt
  })



  return (
    <div className="cameraContainer">
      <h4 className="cameraPrompt">{cameraType.prompt}</h4>
      <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }} className="optionsBox">
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={cameraType.icon}
          className="speedDialColor"
        >
          {cameraOptions.map((option) => (
            <SpeedDialAction
              key={option.name}
              icon={option.icon}
              tooltipTitle={option.name}
              // On choice click, set cameraType state object to current object in the cameraOptions list
              onClick={() => setCameraType({icon: option.icon, name: option.name, prompt: option.prompt})}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  )
}

export default Camera
