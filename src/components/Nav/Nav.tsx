import NavButon from '../NavButtons/NavButon';
import './Nav.scss';


const Nav = () => {
  return (
    <nav className='nav-display'>
        <h2 className='nav-display__header'>Gender</h2>
        <div className='button-container'>
            <NavButon label="Male"/>
            <NavButon label="Female"/>
            <NavButon label="Other"/>
        </div>
        <h2 className='nav-display__header'>Species</h2>
        <div className='button-container'>
            <NavButon label="Male"/>
            <NavButon label="Female"/>
            <NavButon label="None"/>
        </div>
        <h2 className='nav-display__header'>Status</h2>
        <div className='button-container'>
            <NavButon label="Alive"/>
            <NavButon label="Deceased"/>
            <NavButon label="Unknown"/>
        </div>
    </nav>
  )
}

export default Nav
