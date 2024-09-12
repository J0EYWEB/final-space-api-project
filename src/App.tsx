import { useEffect, useState } from 'react'
import './App.scss'
import Heading from './components/Heading/Heading'
import SideNav from './containers/SideNav/SideNav'
import CardsSection from './containers/CardsSection/CardsSection';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterInfo from './components/CharacterInfo/CharacterInfo';
import Characters from './data/Types/Characters';
import PageNav from './containers/PageNav/PageNav';


function App() {
  const [char, setChar] = useState<Characters[]>([]);
  const [characterSeachDefault, setCharacterSearchDefault] = useState<Characters[]>([]);

  fetch("https://finalspaceapi.com/api/v0/character")
      .then((res) => res.json())
      .then((data) => setCharacterSearchDefault(data));

  const getCharacterList = () =>{
    fetch("https://finalspaceapi.com/api/v0/character")
      .then((res) => res.json())
      .then((data) => setChar(data));
  }
  useEffect(() => {
    getCharacterList();
  }, []);


  return (
    <BrowserRouter>
    <>
      <PageNav />
      <Routes>
        <Route path='/characters' element={
          <>
          <Heading heading="Final Space Character Database" />
          <main>
          <SideNav data={char} setChar={setChar} reset={getCharacterList} original={characterSeachDefault}/>
          <CardsSection data={char} />
          </main> 
          </>
        }/>
        <Route path='/characters/:id' element={<CharacterInfo characters={char}/>}/>
      </Routes>
    </>
    
    </BrowserRouter>
  )
}

export default App
