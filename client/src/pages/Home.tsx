import {
  HomeTitle,
  HomeWavePic,
  About,
  NavBar
} from '../components'

const Home = () => {

  return (
    <>
      <HomeTitle />
      <HomeWavePic />
      <About />
      <NavBar definedRoute='home'/>
    </>
  )
}

export default Home
