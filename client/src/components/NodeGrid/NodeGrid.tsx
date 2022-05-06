import './NodeGrid.css'

const NodeGrid = () => {

  // Create a display of 1px node that will mirror rgb nodes from the camera
  const generateNodeGrid = () => {
    
    let gridArray = []

    for (let index = 0; index < 243359; index++) {
      gridArray.push(<div className="virtualNode"></div>)
    }

    return gridArray
  }

  return (
    <div className="nodeGridContainer">
      {generateNodeGrid}
    </div>
  )
}

export default NodeGrid
