import React, {useState} from 'react'
import { Button, Modal, TextField } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function ModalCharacter(props) {
    return (
        <Modal 
                className='modalDiv'
                open={props.openModal}
                onClose={props.onClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className='modalContent'>
                    <TextField
                        required
                        id="name"
                        label="Name"
                        style={{ margin: 8 }}
                        placeholder="Rick Sanchez"
                        helperText="I'm Pickle Rick!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={props.name}
                        onChange={(e)=> props.onChange(e)}
                    />
                    <TextField
                        required
                        id="url"
                        label="Url image"
                        style={{ margin: 8 }}
                        placeholder="Url"
                        helperText="http://www.morty.com/image..."
                        fullWidth
                        margin="normal" 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={props.url}
                        onChange={(e)=> props.onChange(e)}
                    />
                    <TextField
                        required
                        id="gender"
                        label="Gender"
                        style={{ margin: 8 }}
                        placeholder="Gender"
                        helperText="Male, Female, Unknown..."
                        fullWidth
                        margin="normal" 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={props.gender}
                        onChange={(e)=> props.onChange(e)}
                    />
                    <TextField
                        required
                        id="specie"
                        label="Specie"
                        style={{ margin: 8 }}
                        placeholder="Specie"
                        helperText="Human, Alien..."
                        fullWidth
                        margin="normal" 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={props.specie}
                        onChange={(e)=> props.onChange(e)}
                    />
                    <TextField
                        required
                        id="location"
                        label="Location"
                        style={{ margin: 8 }}
                        placeholder="Location"
                        helperText="Earth, Abadango ..."
                        fullWidth
                        margin="normal" 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={props.location}
                        onChange={(e)=> props.onChange(e)}
                    />
                    <TextField
                        required
                        id="origin"
                        label="Origin"
                        style={{ margin: 8 }}
                        placeholder="Origin"
                        helperText="Earth, Abadango ..."
                        fullWidth
                        margin="normal" 
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={props.origin}
                        onChange={(e)=> props.onChange(e)}
                    />
                    <FormControl className='formControlModal'>
                        <InputLabel id="statusId">Status</InputLabel>
                        <Select
                            labelId="statusId"
                            id='status'
                            name='status'
                            value={props.status}
                            onChange={(e) => props.onChangeForm(e)}
                        >
                            <MenuItem value={'Alive'} >Alive</MenuItem>
                            <MenuItem value={'Dead'}>Dead</MenuItem>
                            <MenuItem value={'Unknown'}>Unknown</MenuItem>
                        </Select>
                    </FormControl>
                    <Button className='btnModalAccept' onClick={() => props.saveFN()}>Save</Button>
                    <Button className='btnModalCancel' onClick={() =>props.onClose()}>Cancel</Button>
                </div>
            </Modal>
    )
}

export default ModalCharacter
