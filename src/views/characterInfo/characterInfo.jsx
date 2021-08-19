import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import CharacterInfoCard from '../../components/characterInfoCard/characterInfoCard';
function CharacterInfo() {
    const [characterDetail, setCharacerDetail] = useState({});
    const [showData, setShowData] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const params = useParams();

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character/'+params.id)
        .then(response => {
            var characterResponse = response.data;
            setCharacerDetail(characterResponse);
            setShowData(true)
        })
        .catch(e => {
            setShowData(false)
            setErrorMessage('Sometimes science is more art than science.')
        })
      }, []);
    return (
        <div>
            <h1></h1>
            {showData?
            <CharacterInfoCard info={characterDetail}/>
            : (errorMessage === '')? <h1>Cargando...</h1> : <h1>{errorMessage}</h1>}
        </div>
    )
}

export default CharacterInfo
