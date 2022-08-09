import {
  Camera,
  NodeGrid,
  ColorGrid,
  NavBar
} from '../components'

const Waize = () => {
  return (
    <>
      <Camera />
      <NodeGrid />
      <ColorGrid />
      <NavBar definedRoute='waizeVR' />
    </>
  )
}

export default Waize
