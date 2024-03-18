import React from 'react'
import { Dialog, DialogTitle, DialogContent } from '@mui/material';


function Popup(props) {
    const {children, openPopup, setOpenPopup} = props;
  return (
    <div>
       <Dialog open={openPopup}   >
            <DialogContent >
                {children}
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Popup
