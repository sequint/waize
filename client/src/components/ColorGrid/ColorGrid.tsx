import { useAppSelector } from '../../app/hooks'
import { selectAverageColor } from '../Camera/averageColorSlice'
import './ColorGrid.css'

const ColorGrid = () => {
  const averageColor = useAppSelector(selectAverageColor)

  const oceanNotOcean: any = () => {
    // return <h1 className="colorText">{averageColor}</h1>
    if (averageColor >= 160 && averageColor <= 225) {
      return <h1 className="colorText">{averageColor} You might be looking at an ocean</h1>
    }
    else {
      return <h1 className="colorText">{averageColor} That's probably not an ocean</h1>
    }
  }

  return (
    <div className="grid">
      {oceanNotOcean()}
    </div>
  )
}

export default ColorGrid
