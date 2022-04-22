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
      <NavBar definedRoute='waize'/>
    </>
  )
}

export default Home
