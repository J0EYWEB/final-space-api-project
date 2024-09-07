import { useEffect, useState } from 'react'
import './App.scss'

import Heading from './components/Heading/Heading'
import Nav from './components/Nav/Nav'
import CardsSection from './containers/CardsSection';

function App() {
  const [char, setChar] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/character")
      .then((res) => res.json())
      .then((data) => setChar(data));
  }, []);

  return (
    <>
      <Heading heading="Final Space Character Database" />
      <main>
      <Nav data={char} />
      <CardsSection data={char} />
      </main>
    </>
  )
}

export default App
