import './NavButton.scss';

type NavButtonProps = {
    label: string;
}

const NavButon = ({ label }: NavButtonProps) => {
  return (
        <button className="nav-button nav-button__border nav-button__border--colour">{label}</button>
  )
}


export default NavButon
