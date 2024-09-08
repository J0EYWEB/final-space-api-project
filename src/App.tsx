import { useEffect, useState } from 'react'
import './App.scss'

import Heading from './components/Heading/Heading'
import Nav from './components/Nav/Nav'
import CardsSection from './containers/CardsSection';

function App() {
  const [char, setChar] = useState<any[]>([]);

  const getCharacterList = () =>{
    fetch("https://finalspaceapi.com/api/v0/character")
      .then((res) => res.json())
      .then((data) => setChar(data));
  }
  useEffect(() => {
    getCharacterList();
  }, []);

  return (
    <>
      <Heading heading="Final Space Character Database" />
      <main>
      <Nav data={char} setChar={setChar} reset={getCharacterList} />
      <CardsSection data={char} />
      </main>
    </>
  )
}

export default App
