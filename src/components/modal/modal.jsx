import React from 'react'
import { Button, Modal, TextField } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

function ModalGeneric(props) {
    return (
        <Modal 
                className='modalDiv'
                open={props.openModal}
                onClose={props.onClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className='modalContent'>
                <Typography variant="body2" color="textSecondary" component="p">
                            {props.message}
                        </Typography>
                
                    <Button className='btnModalAccept' onClick={() => props.confirm()}>Confirm</Button>
                    <Button className='btnModalCancel' onClick={() =>props.cancel()}>Cancel</Button>
                </div>
        </Modal>
    )
}

export default ModalGeneric
