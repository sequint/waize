import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { selectPhotoView, selectPhotoURL, togglePhotoView } from './capturedPhotoSlice'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import { ColorGrid } from '..'
import './CapturedPhoto.css'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const CapturedPhoto = () => {
  const open = useAppSelector(selectPhotoView)
  const dispatch = useAppDispatch()

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => dispatch(togglePhotoView())}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className="capPhotoHolder"
      >
        <Fade in={open}>
          <Box sx={style} className="photoBox">
            <ColorGrid />
            <img src={useAppSelector(selectPhotoURL)} alt="captured wave" className="photoImg" />
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default CapturedPhoto
