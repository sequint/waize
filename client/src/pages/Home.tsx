import HomeTitle from '../components/HomeTitle'
import HomeWavePic from '../components/HomeWavePic'
import NavBar from '../components/NavBar'

const Home = () => {

  return (
    <>
      <HomeTitle />
      <HomeWavePic />
      <NavBar definedRoute='home'/>
    </>
  )
}

export default Home
