import React, {useState} from 'react'
import { Button} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { addCharacterAction } from '../../state/actions';
import ModalCharacter from '../modalCharacter/modalCharacter'


const initialState = {
    openModal:false,
    name: "",
    url: "",
    gender: "",
    specie: "",
    location: "",
    origin: "",
    status: ""
  };
  
function AddCharacter() {
    const [{openModal, name, url, gender, specie, location, origin, status}, setState] = useState(initialState);
    const characters = useSelector((state)=> state.characters)
    const dispatch = useDispatch();
    
    const onChange = e => {
        const { id, value } = e.target;
        setState(prevState => ({ ...prevState, [id]: value }));
        
      };

    const onChangeForm = e => {
        setState(prevState => ({ ...prevState, ['status']: e.target.value }))
    }

    const saveFN = () => {
        let newCharacter = {
            id: (characters.length + 1),
            name : name, 
            image: url,
            gender: gender,
            species: specie,
            location: {name: location},
            origin: {name: origin},
            status: status
        }
        dispatch(addCharacterAction(newCharacter))
        setState({ ...initialState })
    }
    return (
        <div>
            <Button type="button" className='btnModalAccept' onClick={()=>setState(prevState => ({ ...prevState, ['openModal']: true }))}>
                New
            </Button>
             <ModalCharacter 
                openModal={openModal}
                onClose = {()=> setState({ ...initialState }) } 
                name={name} 
                url={url} 
                gender={gender}
                specie={specie}
                location={location}
                origin={origin}
                status={status}
                onChange={(e) => onChange(e)}
                onChangeForm={(e)=>onChangeForm(e)}
                saveFN={() => saveFN()} />
        </div>
    )
}

export default AddCharacter;