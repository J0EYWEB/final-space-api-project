import './CharacterCard.scss';


type CharacterCardProps = {
    gender: string;
    species: string;
    status: string;
    origin: string;
}


const CharacterCard = ({gender, species, status, origin}: CharacterCardProps) => {
  return (
    <div className='character-card'>
        <div className='character-card__image-container'>
            <img src="https://finalspaceapi.com/api/character/avatar/gary_goodspeed.png" alt="" />
        </div>
        <h3 className='character-card__heading'>Name</h3>
        <div className='character-info'>
            <p>Gender: {gender} </p>
            <p>Species: {species}</p>
            <p>Status: {status}</p> 
            <p>Origin: {origin}</p>
        </div>
             
    </div>
  )
}

export default CharacterCard
