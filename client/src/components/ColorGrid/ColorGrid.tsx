import './ColorGrid.css'

const displayColorBoxes: any = () => {
  const photoWidth = window.innerWidth
  const gridLength = photoWidth / 10
  console.log(gridLength)

  let photoBoxList = []
  for (let length = 0; length < gridLength; length++) {
    photoBoxList.push(<div className="box"></div>)
  }

  return photoBoxList
}

const ColorGrid = () => {
  return (
    <div className="grid">
      {displayColorBoxes()}
    </div>
  )
}

export default ColorGrid
