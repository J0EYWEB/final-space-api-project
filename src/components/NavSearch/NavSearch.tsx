import './NavSearch.scss';


type NavSearchProps = {
    inputChange: any;
    character: any;
}

const NavSearch = ({inputChange, character}: NavSearchProps) => {
  return (
    <div className="nav-search">
      <input type="text" value={character} onChange={inputChange}></input>
    </div>
  )
}

export default NavSearch
