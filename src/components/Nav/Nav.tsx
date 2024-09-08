import NavButton from '../NavButtons/NavButton';
import Characters from '../Types/Characters';
import './Nav.scss';

type NavProps = {
    data: Characters[];
    setChar: (char: Characters[]) => void;
    reset: () => void;
}

const Nav = ( {data, setChar, reset}: NavProps) => {
    const charStatus = [...new Set(data.map((character: Characters) => character.status))];
    const charSpecies = [...new Set(data.map((character: Characters) => character.species))]

    const filterCharacters = (currentCat:string) => {
        const filteredItems = data.filter((newItem) => {
            return newItem.status === currentCat;
        });

        console.log(filteredItems);
        setChar(filteredItems);
    }


  return (
    <nav className='nav-display'>
        <NavButton label='All' filter={reset}/>
        <h2 className='nav-display__header'>Gender</h2>
        <div className='button-container'>
        </div>
        <h2 className='nav-display__header'>Species</h2>
        <div className='button-container'>
      
        </div> 
        <h2 className='nav-display__header'>Status</h2>
        <div className='button-container'>
            {charStatus.map((stat,index) => {
                return(
                    <NavButton key={index} label={stat} filter={() => filterCharacters(stat)}/>
                )
            })}
        </div>
    </nav>
  )
}

export default Nav
