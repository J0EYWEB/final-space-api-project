import { useState } from 'react';
import NavButton from '../../components/NavButtons/NavButton';
import NavSearch from '../../components/NavSearch/NavSearch';
import Characters from '../../data/Types/Characters';
import './SideNav.scss';

type NavProps = {
    data: Characters[];
    original: Characters[];
    setChar: (char: Characters[]) => void;
    reset: () => void;
}

const SideNav = ( {data, setChar, reset, original }: NavProps) => {

    const [searchItem, setSearchItem] = useState<string>('');
    const [toggleGenderFilter, setGenderFilter] = useState(false);
    const [toggleSpeciesFilter, setSpeciesFilter] = useState(false);
    const [toggleStatusFilter, setStatusFilter] = useState(false);
    const [toggleOriginFilter, setOriginFilter] = useState(false);
    

    const charStatus = [...new Set(data.filter((charStatus) => charStatus.status).map((character: Characters) => character.status))];

    const charSpecies = [...new Set(data.filter((charSpecies) => charSpecies.species).map((character: Characters) => {
        if(character.species.toLocaleLowerCase().includes('titan')){
            character.species = 'Titan';
        };
        if(character.species.toLowerCase().includes('artificial')){
            character.species = 'Artificial Intelligence';
        };
        return character.species
    }))];

    const CharGender = [...new Set(data.filter((charGender) => charGender.gender).map((character: Characters) => {
        if(character.gender.toLowerCase().includes('genderfluid')){
            character.gender = 'Genderfluid';
        }
        if(character.gender.toLowerCase().includes('as male')){
            character.gender = 'None (Referred to as male)'
        }
        return character.gender
    }))];

    const charOrigin = [...new Set(data.filter((charOrigin) => charOrigin.origin).map((character: Characters) => character.origin))];

    const handleFIlterCharacterGender = (currentCat: string) => {
        const filteredGender = data.filter((newItem) => {
            return newItem.gender === currentCat;
        })
        setChar(filteredGender);
    }

    const handleFilterCharacterSpecies = (currentCat: string) =>{
        const filteredSpecies = data.filter((newItem) => {
            return newItem.species === currentCat;
        })

        setChar(filteredSpecies);
    }

    const handleFilterCharacterStatus = (currentCat:string) => {
        const filteredItems = data.filter((newItem) => {
            return newItem.status === currentCat;
        });

        setChar(filteredItems);
    }

    const handleFilterCharacterOrigin = (currentCat: string) => {
        const filteredItems = data.filter((newItem) => {
            return newItem.origin === currentCat;
        })
        setChar(filteredItems);
    }


    const handleSearchChange = (event: any) => {
        const searchTerm = event.target.value;
        setSearchItem(searchTerm);

        const filteredSearchItems = original.filter((characters: Characters) => characters.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setChar(filteredSearchItems);
    }

    
    const handleToggleFilterGender = () => {
        setGenderFilter(!toggleGenderFilter);
    }
    
    const handleToggleFilterSpecies = () => {
        setSpeciesFilter(!toggleSpeciesFilter);
    }

    const handleToggleFilterStatus = () => {
        setStatusFilter(!toggleStatusFilter);
    }

    const handleToggleFilterOrigin = () => {
        setOriginFilter(!toggleOriginFilter);
    }

  return (
    <aside className='nav-display'>
        <h2 className="nav-display__header">Search</h2>
        <NavSearch character={searchItem} inputChange={handleSearchChange}/>
        <div className='button-container'>
            <NavButton label='All' filter={reset}/>
        </div> 
        <button onClick={handleToggleFilterGender} className='nav-display__button'>Gender</button>
        {toggleGenderFilter && <div className='button-container'>
            {CharGender.map((stat, index) => {
                return(
                    <NavButton key={index} label={stat} filter={() => handleFIlterCharacterGender(stat)} />
                )
            })}
        </div>}
        <button onClick={handleToggleFilterSpecies} className='nav-display__button'>Species</button>
        {toggleSpeciesFilter && <div className='button-container'>
            {charSpecies.map((stat, index) => {
                return(
                    <NavButton key={index} label={stat} filter={() => handleFilterCharacterSpecies(stat)}/>
                )
            })}
        </div>}
        <button onClick={handleToggleFilterStatus} className='nav-display__button'>Status</button>
        {toggleStatusFilter && <div className='button-container'>
            {charStatus.map((stat,index) => {
                return(
                    <NavButton key={index} label={stat} filter={() => handleFilterCharacterStatus(stat)}/>
                )
            })}
        </div>}
        <button onClick={handleToggleFilterOrigin} className='nav-display__button'>Origin</button>
        {toggleOriginFilter && <div className='button-container'>
            {charOrigin.map((stat,index) => {
                return(
                    <NavButton key={index} label={stat} filter={() => handleFilterCharacterOrigin(stat)}/>
                )
            })}
        </div>}
    </aside>
  )
}

export default SideNav
