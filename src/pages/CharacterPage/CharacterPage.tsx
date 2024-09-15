import './CharacterPage.scss';
import Characters from "../../data/Types/Characters"
import Heading from "../../components/Heading/Heading"
import SideNav from "../../containers/SideNav/SideNav"
import CardsSection from "../../containers/CardsSection/CardsSection"
import Footer from "../../components/Footer/Footer"

type CharacterPageProps ={
    data: Characters[];
    original: Characters[];
    setChar: (char: Characters[]) => void;
    reset: () => void;
}


const CharacterPage = ({data, setChar, reset, original}: CharacterPageProps) => {
  return (
    <>
        <Heading heading="Final Space Character Database" />
          <main>
            <SideNav data={data} setChar={setChar} reset={reset} original={original}/>
            <CardsSection data={data} />
          </main> 
          <Footer />
    </>
  )
}

export default CharacterPage
