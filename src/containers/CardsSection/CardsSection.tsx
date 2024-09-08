import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './CardsSection.scss';
import characters from '../../data/Types/Characters';
// import { useEffect, useState } from 'react';


type CardsSectionProps = {
    data: characters[];
}

const CardsSection = ({data}: CardsSectionProps)=> {
    
  return (
    <section className='character-container'>
      {data.map((characters: characters) => {
        return(
            <CharacterCard key={characters.id} name={characters.name} gender={characters.gender} species={characters.species} status={characters.status} origin={characters.origin} img_url={characters.img_url} />
        )
      })}
    </section>
  )
}

export default CardsSection
