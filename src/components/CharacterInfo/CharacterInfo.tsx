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


    const {name, origin, species, img_url} = {...char};

    
  return (
    <div>
        <h1>{name}</h1>
        <img src={img_url} alt="" />
        <p>Species: {species}</p>
        <p>Origin: {origin}</p>
        <p></p>
    </div>
    
  );
}

export default CharacterInfo
