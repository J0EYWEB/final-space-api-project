import './CharacterCard.scss';


type CharacterCardProps = {
    name: string;
    gender: string;
    species: string;
    status: string;
    origin: string;
    img_url: string;
}


const CharacterCard = ({name, gender, species, status, origin, img_url}: CharacterCardProps) => {
    if(species === undefined){
        species = 'Unknown';
    }
    //Modifies the card boxShadow depending on character status
    const boxShadowModifier = () => {
        if (status.includes('Deceased') || status.includes('Destroyed')) {
            return 'character-card--deceased';
        } else if (status.includes('Unknown')){
            return  'character-card--unknown';
        } else {
            return '';
        }
    }


  return (
    <div className={`character-card ${boxShadowModifier()}`}>
        <div className='character-card__image-container'>
            <img src={img_url} alt="" />
        </div>
        <h3 className='character-card__heading '>{name}</h3>
        <div className='character-info'>
            <h4 className='character-info__header'>Gender:</h4>
            <p className='character-info__para'>{gender}</p>
            <h4 className='character-info__header'>Species:</h4>
            <p className='character-info__para'>{species}</p>
            <h4 className='character-info__header'>Status:</h4> 
            <p className='character-info__para'>{status}</p>
            <h4 className='character-info__header'>Origin:</h4>
            <p className='character-info__para'>{origin}</p>
            
        </div>
             
    </div>
  )
}

export default CharacterCard
