import { useRef, useEffect } from 'react'
import { useUserMedia } from '../../hooks'

const Canvas = (props: any) => {

  // Create vars using useRef hook to access dom element
  const canvasRef = useRef(null)

  // On component load extract canvas context and create the rectangle (area)
  useEffect(() => {
    const canvas: any = canvasRef.current
    const canvasContext = canvas.getContext('2d')
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="canvasStyle"
        {...props} />
    </>
  )
}

export default Canvas
