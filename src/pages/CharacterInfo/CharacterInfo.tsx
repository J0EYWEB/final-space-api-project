import Characters from '../../data/Types/Characters';
import {useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import './CharacterInfo.scss';

type CharacterInfoProps = {
    characters: Characters[];
}


const CharacterInfo = ({characters}: CharacterInfoProps) => {
    const [char, setChar] = useState({} as Characters);
    const { id } = useParams();
    
    useEffect(() => {
        setChar(
            characters.filter((charac) => parseInt(charac.id) === parseInt(id as string))[0],
        )
    }, [characters]);

    let {name = '', gender = '', status = '', hair = '', origin = '', species = '', img_url = '', alias = []} = {...char};

    const cardGlowModifier = () => {
        if (status.includes('Deceased') || status.includes('Destroyed')) {
            return 'character-main-card--deceased';
        } else if (status.includes('Unknown')){
            return  'character-main-card--unknown';
        } else {
            return '';
        }
    }
  return (
    <div className='page-container'>
        <div className={`character-main-card ${cardGlowModifier()}`}>
            
             <img className="character-image" src={img_url} alt={name} />
        
            <div className="character-main-card__info">
                <h1 className='main-card-header'>{name}</h1>
                <div className='main-info'>
                    <div className='info-pairing'>
                        <h2 className='main-card-subheading'>Species:</h2> 
                        <p>{species}</p>
                    </div>
                    <div className='info-pairing'>
                        <h2 className='main-card-subheading'>Gender:</h2>
                        <p>{gender}</p>
                    </div>
                    <div className='info-pairing'>
                        <h2 className='main-card-subheading'>Status:</h2>
                        <p>{status}</p>
                    </div>
                    <div className='info-pairing'>
                        <h2 className='main-card-subheading'>Origin:</h2>
                        <p>{origin}</p>
                    </div>
                    <div className='info-pairing'>
                        <h2 className='main-card-subheading'>Hair:</h2>
                        <p>{hair}</p>
                    </div>
                    <div className='info-pairing'>
                        <h2 className='main-card-subheading'>Alias:</h2> 
                        <ul>
                        {
                            !alias || alias.length === 0 ? (
                                <li>No Known Alias</li>
                            ) : (
                                alias.slice(0, 5).map((name, index) => (
                                    <li key={index}>{name}</li>
                                ))
                            )
                        }
                        </ul>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  );
}

export default CharacterInfo
