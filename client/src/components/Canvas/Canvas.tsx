import { useRef } from 'react'

const Canvas = (props: any) => {

  // Create vars using useRef hook to access dom element, then get it's context
  const canvasRef = useRef(null)
  const canvas: any = canvasRef.current
  const canvasContext = canvas.getContext('2d')

  return (
    <>
      <canvas ref={canvasRef} {...props} />
    </>
  )
}

export default Canvas
