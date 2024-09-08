import './NavButton.scss';
import '../Types/Characters';
// import Characters from '../Types/Characters';
type NavButtonProps = {
    label: string;
    filter: any;
}

const NavButton = ({ label, filter }: NavButtonProps) => {
  return (
        <button className="nav-button nav-button__border nav-button__border--colour" onClick={filter}>{label}</button>
  )
}


export default NavButton
