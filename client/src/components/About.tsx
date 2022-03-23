import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import WavesRoundedIcon from '@mui/icons-material/WavesRounded'
import SquareFootRoundedIcon from '@mui/icons-material/SquareFootRounded'
import Avatar from '@mui/material/Avatar'
import './About.css'

const aboutSections = [
  {
    icon: <WavesRoundedIcon />,
    title: 'Wave Detection',
    text: 'Waize uses pixl technology to analyze pictures in real time and detect waves that are forming.'
  },
  {
    icon: <SquareFootRoundedIcon />,
    title: 'Wave Size',
    text: 'Using the wave detection technology, Waize will analyze what it deems the face of a wave compared to its surroundings and predict in real time its size.'
  }
]

const About = () => {
  return (
    <>
      <h2 className="aboutTitle">What It Does</h2>
      <List className="aboutList" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {
          aboutSections.map(item => (
            <ListItem>
              <ListItemAvatar>
                <Avatar className="iconColor">
                  {item.icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.title} secondary={item.text} />
            </ListItem>
          ))
        }
      </List>
    </>
  )
}

export default About
