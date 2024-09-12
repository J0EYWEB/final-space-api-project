import './PageNavButton.scss';

type PageNavButtonProps = {
    label: string;
}

const PageNavButton = ({label}: PageNavButtonProps) => {
  return (
    <div>
      <button className='page-nav-button'>{label}</button>
    </div>
  )
}

export default PageNavButton
