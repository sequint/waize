import wavePic from '../../images/dashboardWave.jpeg'
import wavePicSmall from '../../images/dashboardWaveSmall.png'
import './HomeWavePic.css'

const HomeWavePic = () => {

  return (
    <>
      <img src={wavePic} alt="waves with waize generator" className="homeWavePic largePic" />
      <img src={wavePicSmall} alt="waves with waize generator" className="homeWavePic smallPic" />
    </>
  )
}

export default HomeWavePic
