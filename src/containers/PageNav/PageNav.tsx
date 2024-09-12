import PageNavButton from '../../components/PageNavButton/PageNavButton';
import './PageNav.scss';

const PageNav = () => {
  return (
    <div className='page-nav-container page-nav-container--background'>
      <PageNavButton label="Home"/>
      <PageNavButton label="Characters"/>
    </div>
  )
}

export default PageNav
