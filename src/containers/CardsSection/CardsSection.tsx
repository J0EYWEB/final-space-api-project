import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './CardsSection.scss';
import characters from '../../data/Types/Characters';
import {Link} from 'react-router-dom';
// import { useEffect, useState } from 'react';


type CardsSectionProps = {
    data: characters[];
}

const CardsSection = ({data}: CardsSectionProps)=> {
    
  return (
    <section className='character-container'>
      {data.map((characters: characters) => {
        return (
          <Link key={characters.id} to={`/characters/${characters.id}`}>
            <CharacterCard key={characters.id} characters={characters} />
          </Link>
        )
      })}
    </section>
  )
}

export default CardsSection
