import { useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import CottageRounded from '@mui/icons-material/CottageRounded'
import WavesRoundedIcon from '@mui/icons-material/WavesRounded'
import './NavBar.css'

const NavBar = () => {
  const [value, setValue] = useState(0)
  const [linkClicked, setLinkClicked] = useState(false)

  return (
    <Box className="navBarAlign">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <Link to='/'>
          <BottomNavigationAction className="navLink" label="Home" icon={<CottageRounded />} />
        </Link>
        <Link to='/waize'>
          <BottomNavigationAction className="navLink" label="Waize" icon={<WavesRoundedIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  )
}

export default NavBar
