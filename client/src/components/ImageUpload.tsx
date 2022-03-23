import UploadRoundedIcon from '@mui/icons-material/UploadRounded'
import './ImageUpload.css'

const ImageUpload = () => {
  return (
    <div className="uploadContainer">
      <div className="uploadBtn">
        <UploadRoundedIcon className="uploadIcon" sx={{ fontSize: 100 }}  />
      </div>
      <p className="uploadPrompt">Upload a Wave Image</p>
    </div>
  )
}

export default ImageUpload
