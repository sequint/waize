import { useRef } from 'react'

const Canvas = (props: any) => {

  const canvasRef = useRef(null)

  return (
    <>
      <canvas {...props} />
    </>
  )
}

export default Canvas
