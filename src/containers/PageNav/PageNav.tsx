import PageNavButton from '../../components/PageNavButton/PageNavButton';
import './PageNav.scss';
import { Link } from 'react-router-dom';

const PageNav = () => {
  return (
    <nav className='page-nav-container page-nav-container--background'>
        <Link to="/"> 
            <PageNavButton label="Home"/>
        </Link>
        <Link to="/characters">
        <PageNavButton label="Characters"/>
        </Link>
    </nav>
  )
}

export default PageNav
