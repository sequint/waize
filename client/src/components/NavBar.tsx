import { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import CottageRounded from '@mui/icons-material/CottageRounded'
import WavesRoundedIcon from '@mui/icons-material/WavesRounded'
import './NavBar.css'

// Typescript interface to define prop type for the defined route in NavBar
interface navbar {
  definedRoute: String
}

const NavBar: React.FC<navbar> = (definedRoute) => {
  const [value, setValue] = useState(0)

  return (
    <Box className="navBarAlign">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
          console.log(newValue)
        }}
      >
        <Link to='/'>
          <BottomNavigationAction label="Home" icon={<CottageRounded />} />
        </Link>
        <Link to='/waize'>
          <BottomNavigationAction label="Waize" icon={<WavesRoundedIcon />} />
        </Link>
        
      </BottomNavigation>
    </Box>
  )
}

export default NavBar
