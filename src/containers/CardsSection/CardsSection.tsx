import CharacterCard from '../../components/CharacterCard/CharacterCard';
import './CardsSection.scss';
import characters from '../../data/Types/Characters';
import {Link} from 'react-router-dom';


type CardsSectionProps = {
    data: characters[];
}

const CardsSection = ({data}: CardsSectionProps)=> {
    
  return data.length > 0 ? (
    <section className='character-container'>
      {data.map((characters: characters) => {
        return (
          <Link key={characters.id} to={`/characters/${characters.id}`}>
            <CharacterCard key={characters.id} characters={characters} />
          </Link>
        )
      })}
    </section>
  ) : (
    <div className='default-error default-error--color'>
      <h4 className='default-error__heading '>No Characters Found</h4>
    </div>
  )
}

export default CardsSection
