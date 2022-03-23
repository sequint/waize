import UploadRoundedIcon from '@mui/icons-material/UploadRounded'
import './ImageUpload.css'

const ImageUpload = () => {
  return (
    <div className="uploadContainer">
      <div className="uploadBtn">
        <UploadRoundedIcon className="uploadIcon" sx={{ fontSize: 100 }}  />
      </div>
    </div>
  )
}

export default ImageUpload
