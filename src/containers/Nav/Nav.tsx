import { useState } from 'react';
import NavButton from '../../components/NavButtons/NavButton';
import NavSearch from '../../components/NavSearch/NavSearch';
import Characters from '../../data/Types/Characters';
import './Nav.scss';

type NavProps = {
    data: Characters[];
    original: Characters[];
    setChar: (char: Characters[]) => void;
    reset: () => void;
}

const Nav = ( {data, setChar, reset, original }: NavProps) => {
    const [searchItem, setSearchItem] = useState('');
    //FILTERS
    //status filter
    const charStatus = [...new Set(data.filter((charStatus) => charStatus.status).map((character: Characters) => character.status))];

    //Species filter with if statements to clean up API strings
    const charSpecies = [...new Set(data.filter((charSpecies) => charSpecies.species).map((character: Characters) => {
        if(character.species.toLocaleLowerCase().includes('titan')){
            character.species = 'Titan';
        };
        if(character.species.toLowerCase().includes('artificial')){
            character.species = 'Artificial Intelligence';
        };
        return character.species
    }))];

    // Gender filter with if statements to clean up API strings
    const CharGender = [...new Set(data.filter((charGender) => charGender.gender).map((character: Characters) => {
        if(character.gender.toLowerCase().includes('genderfluid')){
            character.gender = 'Genderfluid';
        }
        if(character.gender.toLowerCase().includes('as male')){
            character.gender = 'None (Referred to as male)'
        }
        return character.gender
    }))];


    //FILTER FUNCTIONS
    //Gender filter function
    const handleFIlterCharacterGender = (currentCat: string) => {
        const filteredGender = data.filter((newItem) => {
            return newItem.gender === currentCat;
        })
        setChar(filteredGender);
    }

    //Species filter function
    const handleFilterCharacterSpecies = (currentCat: string) =>{
        const filteredSpecies = data.filter((newItem) => {
            return newItem.species === currentCat;
        })

        setChar(filteredSpecies);
    }

    //Status filter function
    const handleFilterCharacterStatus = (currentCat:string) => {
        const filteredItems = data.filter((newItem) => {
            return newItem.status === currentCat;
        });

        setChar(filteredItems);
    }

    //Search by name filter function.
    const handleSearchChange = (event: any) => {
        const searchTerm = event.target.value;
        setSearchItem(searchTerm);

        const filteredSearchItems = original.filter((characters: Characters) => characters.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setChar(filteredSearchItems);
    }

  return (
    <nav className='nav-display'>
        <h2 className="nav-display__header">Search</h2>
        <NavSearch character={searchItem} inputChange={handleSearchChange}/>
        <div className='button-container'>
            <NavButton label='All' filter={reset}/>
        </div> 
        <h2 className='nav-display__header'>Gender</h2>
        <div className='button-container'>
            {CharGender.map((stat, index) => {
                return(
                    <NavButton key={index} label={stat} filter={() => handleFIlterCharacterGender(stat)} />
                )
            })}
        </div>
        <h2 className='nav-display__header'>Species</h2>
        <div className='button-container'>
            {charSpecies.map((stat, index) => {
                return(
                    <NavButton key={index} label={stat} filter={() => handleFilterCharacterSpecies(stat)}/>
                )
            })}
        </div> 
        <h2 className='nav-display__header'>Status</h2>
        <div className='button-container'>
            {charStatus.map((stat,index) => {
                return(
                    <NavButton key={index} label={stat} filter={() => handleFilterCharacterStatus(stat)}/>
                )
            })}
        </div>
    </nav>
  )
}

export default Nav
