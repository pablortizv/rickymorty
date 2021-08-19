import React from 'react'
import { useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

function CharacterInfoCard(props) {
    return (
        <div >
            <div className={'avatarDiv'}>
                <Avatar className={'avatar'} alt={props.info.name} src={props.info.image}/>
            </div>
            <div className={'infoCharacter'}>
                <div className='infoName'>
                    <Typography>{props.info.name}</Typography>
                </div>
                <div className={'infoGeneralDiv'}>
                    <Typography className={'infoGeneral'}>Status: {props.info.status}</Typography>
                    <Typography className={'infoGeneral'}>Specie: {props.info.species}</Typography>
                    <Typography className={'infoGeneral'}>Type: {props.info.type}</Typography>
                    <Typography className={'infoGeneral'}>Gender: {props.info.gender}</Typography>
                    <Typography className={'infoGeneral'}>Origin: {props.info.origin.name}</Typography>
                    <Typography className={'infoGeneral'}>Location: {props.info.location.name}</Typography>
                    <Typography className={'infoGeneral'}> Episodes: 
                        {(props.info.episode).map((episode) => (
                            <Typography>
                                {episode}
                            </Typography>
                        ))}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default CharacterInfoCard