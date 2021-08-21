import React from 'react'
import { Dialog, DialogContent, Box } from '@material-ui/core'

export const Modal = ({ open, handleClose, form }) => {
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="title" fullWidth maxWidth='lg'>
            <Box display="flex">
                <Box flexGrow={2}></Box>
                <Box flexGrow={3}></Box>
                <Box flexGrow={3} fontSize={30} fontWeight={700} m={2}>
                    Create Quick Click Alert
                </Box>
            </Box>
            <DialogContent>
                {form}
            </DialogContent>
        </Dialog>
    )
}
