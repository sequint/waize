import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded'
import VideoCameraBackRoundedIcon from '@mui/icons-material/VideoCameraBackRounded'
import './Camera.css'

const cameraOptions = [
  { icon: <CameraAltRoundedIcon />, name: 'Photo' },
  { icon: <VideoCameraBackRoundedIcon />, name: 'Video' }
]

const Camera = () => {
  return (
    <>
      <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }} className="optionsBox">
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {cameraOptions.map((option) => (
            <SpeedDialAction
              key={option.name}
              icon={option.icon}
              tooltipTitle={option.name}
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  )
}

export default Camera
