import { JSXText } from '@babel/types'
import { useEffect } from 'react'
import './NodeGrid.css'

const NodeGrid = () => {
  // Create empty array to hold node divs
  let gridArray: any = []

  // On component mount create the node grid
  useEffect(() => {
    for (let index = 0; index < 243359; index++) {
      console.log('In array creation')
      gridArray.push(<div className="virtualNode"></div>)
    }
  })

  // Create a display of 1px node that will mirror rgb nodes from the camera
  const generateNodeGrid = () => gridArray.map((node: any) => node)

  return (
    <div className="nodeGridContainer">
      {generateNodeGrid()}
    </div>
  )
}

export default NodeGrid
