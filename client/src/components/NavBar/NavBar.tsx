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

const NavBar: React.FC<navbar> = (props) => {
  const [value, setValue] = useState(0)

  const updateIconClass = (icon: String) => {
    // Return a class string depending on the icon and definedRoute
    switch(icon) {
      case 'home':
        if (props.definedRoute === 'home') { return 'activeLinkIcon' }
        else { return 'inactiveLinkIcon' }
      case 'waize':
        return props.definedRoute === 'waize' ? 'activeLinkIcon' : 'inactiveLinkIcon'
      default:
        return 'inactiveLinkIcon'
    }
  }

  return (
    <Box className="navBarHolder">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <Link to='/'>
          <BottomNavigationAction className={updateIconClass('home')} label="Home" icon={<CottageRounded />} />
        </Link>
        <Link to='/waize'>
          <BottomNavigationAction className={updateIconClass('waize')} label="Waize" icon={<WavesRoundedIcon />} />
        </Link>
        
      </BottomNavigation>
    </Box>
  )
}

export default NavBar
