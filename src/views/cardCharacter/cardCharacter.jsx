import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import _, { map } from 'underscore';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../css/App.css'
import {deleteCharactAction, addCharacterAction} from '../../state/actions'
import ModalCharacter from '../../components/modalCharacter/modalCharacter'
import {Link} from 'react-router-dom'
import ModalGeneric from '../../components/modal/modal';
import AddCharacter from '../../components/addCharacter/addCharacter';

function CardCharacter(props) {
    const initialState = {
        openModal:false,
        name: '',
        url: '',
        gender: '',
        specie: '',
        location: '',
        origin: '',
        status: ''
      };
    const [{openModal, id, name, url, gender, specie, location, origin, status}, setState] = useState(initialState);
   
    const [openModalGeneric, setOpenModalGeneric] = useState(false);
    const [toDelete, setToDelete] = useState();
    
    const characters = _.sortBy( props.cards, 'id' );
    const dispatch = useDispatch();

    const modalOperator = (id, name, url, gender, specie, location, origin, status) => {
        let newCharacter = {
            openModal:true,
            id: id,
            name : name, 
            url: url,
            gender: gender,
            specie: specie,
            location: location,
            origin: origin,
            status: status
        }
        setState({ ...newCharacter })
    };

    const onChange = e => {
        const { id, value } = e.target;
        setState(prevState => ({ ...prevState, [id]: value }));
        
      };

    const onChangeForm = e => {
        setState(prevState => ({ ...prevState, ['status']: e.target.value }))
    }

    const saveFN = () => {
        dispatch(deleteCharactAction(id))
        let editCharacter = {
            id: id,
            name : name, 
            image: url,
            gender: gender,
            species: specie,
            location: {name: location},
            origin: {name: origin},
            status: status
        }
        dispatch(addCharacterAction(editCharacter))
        setState({ ...initialState })
    }
    const deleteModal = (id) => {
        setToDelete(id);
        setOpenModalGeneric(true)
    }
    const confirmDelete = () => {
        setOpenModalGeneric(false);
        dispatch(deleteCharactAction(toDelete))
        
    }

    return (
        <div>
            <AddCharacter/>
            <div className='card-space'>
                
                
                {characters.map((character, i) => (
                    <Card key={i} className={'card'}>
                        <Link to={`/info/${character.id}`}>
                        <CardActionArea>
                            <CardMedia
                                className={'card-media'}
                                image={character.image}
                                title={character.name}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {character.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Gender: {character.gender}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Specie: {character.species}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Location: {character.location.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Origin: {character.origin.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Status: {character.status}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Link>
                        <CardActions>
                            <Button size="small" className={'btnCard'} 
                                onClick={() => modalOperator(character.id, character.name, character.image, character.gender, character.species, character.location.name, character.origin.name, character.status)} >
                                Edit
                            </Button>
                            <Button size="small" className={'btnCard'} 
                            onClick={() => deleteModal(character.id)}
                            >
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                    
                )
                    )
                }
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
                <ModalGeneric 
                    openModal={openModalGeneric} 
                    message ={'Are you sure you want to delete the character?'}
                    onClose = {()=> setOpenModalGeneric(false) } 
                    cancel = {()=> setOpenModalGeneric(false) } 
                    confirm = {() => confirmDelete()}
                    />
            </div>
        </div>
    )
}

export default CardCharacter



