import Characters from '../../data/Types/Characters';
import './CharacterCard.scss';



type CharacterCardProps = {
    characters: Characters;
}


const CharacterCard = ({characters}: CharacterCardProps) => {
    if(characters.species === undefined){
        characters.species = 'Unknown';
    }

    const boxShadowModifier = () => {
        if (characters.status.includes('Deceased') || characters.status.includes('Destroyed')) {
            return 'character-card--deceased';
        } else if (characters.status.includes('Unknown')){
            return  'character-card--unknown';
        } else {
            return '';
        }
    }

  return (
        <div className={`character-card ${boxShadowModifier()}`}>
            <div className='character-card__image-container'>
                <img src={characters.img_url} alt="" />
            </div>
            
            <h3 className='character-card__heading '>{characters.name}</h3>
            <div className='character-info'>
                <h4 className='character-info__header'>Gender:</h4>
                <p className='character-info__para'>{characters.gender}</p>
                <h4 className='character-info__header'>Species:</h4>
                <p className='character-info__para'>{characters.species}</p>
                <h4 className='character-info__header'>Status:</h4> 
                <p className='character-info__para'>{characters.status}</p>
                <h4 className='character-info__header'>Origin:</h4>
                <p className='character-info__para'>{characters.origin}</p>
            </div>
        </div>
  )
}

export default CharacterCard
