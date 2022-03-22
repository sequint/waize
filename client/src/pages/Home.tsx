import HomeTitle from '../components/HomeTitle'
import HomeWavePic from '../components/HomeWavePic'
import HomeBody from '../components/About'
import NavBar from '../components/NavBar'

const Home = () => {

  return (
    <>
      <HomeTitle />
      <HomeWavePic />
      <HomeBody />
      <NavBar definedRoute='home'/>
    </>
  )
}

export default Home
