import { useRef, useEffect } from 'react'

const Canvas = (props: any) => {

  // Create vars using useRef hook to access dom element
  const canvasRef = useRef(null)

  // On component load extract canvas context and create the rectangle (area)
  useEffect(() => {
    const canvas: any = canvasRef.current
    const canvasContext = canvas.getContext('2d')
    canvasContext.fillRect(0, 0, 10, 10)
  }, [])


  // Retrun the 10x10 px canvas
  return (
    <>
      <canvas ref={canvasRef} width={10} height={10} {...props} />
    </>
  )
}

export default Canvas
