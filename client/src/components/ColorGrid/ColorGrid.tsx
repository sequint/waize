import { useAppSelector } from '../../app/hooks'
import { selectAverageColor } from '../Camera/utils/averageColorSlice'
import './ColorGrid.css'

const ColorGrid = () => {
  const averageColor = useAppSelector(selectAverageColor)
  console.log(averageColor)

  const oceanNotOcean: any = () => {
    // return <h1 className="colorText">{averageColor}</h1>
    if (averageColor >= 120 && averageColor <= 225) {
      return <h1 className="colorText">You might be looking at an ocean</h1>
    }
    else {
      return <h1 className="colorText">Point camera to the ocean</h1>
    }
  }

  return (
    <div className="grid">
      {oceanNotOcean()}
    </div>
  )
}

export default ColorGrid
