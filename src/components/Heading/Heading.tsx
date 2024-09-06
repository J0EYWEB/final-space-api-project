import './Heading.scss';

type HeadingProps = {
    heading: string;
}

const Heading = ({heading}: HeadingProps) => {
    return(
        <header className="heading-container heading-container--background">
            <h1 className="page-heading page-heading--color">{heading}</h1>
        </header>
    )
}

export default Heading