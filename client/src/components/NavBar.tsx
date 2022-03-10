import { useState } from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import CottageRounded from '@mui/icons-material/CottageRounded'
import WavesRoundedIcon from '@mui/icons-material/WavesRounded'
import './NavBar.css'

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0)

  return (
    <Box className="navBarAlign">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction label="Home" icon={<CottageRounded />} />
        <BottomNavigationAction label="Waize" icon={<WavesRoundedIcon />} />
      </BottomNavigation>
    </Box>
  )
}
