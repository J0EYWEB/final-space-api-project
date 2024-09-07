import NavButon from '../NavButtons/NavButon';
import Characters from '../Types/Characters';
import './Nav.scss';

type NavProps = {
    data: Characters[];
}

const Nav = ( {data}: NavProps) => {
    const charStatus = [...new Set(data.map((val:Characters) => val.status))];


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
            <NavButon label="None" />
        </div>
        <h2 className='nav-display__header'>Status</h2>
        <div className='button-container'>
            {charStatus.map((stat,index) => {
                return(
                    <NavButon key={index} label={stat}/>
                )
            })}
        </div>
    </nav>
  )
}

export default Nav
