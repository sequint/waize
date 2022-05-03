import { useState } from 'react'

interface nodeAnalyzer {
  x: Number,
  y: Number,
  height: Number,
  width: Number
}

export const useNodeAnalysis = (props: nodeAnalyzer) => {
  const [nodeParams, setNodeParams] = useState({
    x: props.x,
    y: props.y,
    height: props.height,
    width: props.width
  })

  console.log(nodeParams)
}