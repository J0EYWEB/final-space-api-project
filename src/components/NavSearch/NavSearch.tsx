import './NavSearch.scss';


type NavSearchProps = {
    inputChange: any;
    character: any;
}

const NavSearch = ({inputChange, character}: NavSearchProps) => {
  return (
    <div className="nav-search">
      <input className='nav-search__input' type="text" value={character} onChange={inputChange} placeholder='Search Character...'></input>
    </div>
  )
}

export default NavSearch
