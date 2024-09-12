import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Heading from './components/Heading/Heading'
import SideNav from './containers/SideNav/SideNav'
import CardsSection from './containers/CardsSection/CardsSection';
import CharacterInfo from './components/CharacterInfo/CharacterInfo';
import Characters from './data/Types/Characters';
import PageNav from './containers/PageNav/PageNav';
import WelcomePage from './containers/WelcomePage/WelcomePage';
import Footer from './components/Footer/Footer';


function App() {
  const [char, setChar] = useState<Characters[]>([]);
  const [characterSeachDefault, setCharacterSearchDefault] = useState<Characters[]>([]);


  const getCharacterList = () =>{
    fetch("https://finalspaceapi.com/api/v0/character")
      .then((res) => res.json())
      .then((data) => {
        setChar(data)
        setCharacterSearchDefault(data);
      });
  }
  useEffect(() => {
    getCharacterList();
  }, []);

  console.log('This is the char', char);
  console.log('This is the Default', characterSeachDefault);
  return (
    <BrowserRouter>
    <>
      <PageNav />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/characters' element={
          <>
          <Heading heading="Final Space Character Database" />
          <main>
          <SideNav data={char} setChar={setChar} reset={getCharacterList} original={characterSeachDefault}/>
          <CardsSection data={char} />
          </main> 
          <Footer />
          </>
        }/>
        <Route path='/characters/:id' element={<CharacterInfo characters={char}/>}/>
      </Routes>
    </>
    
    </BrowserRouter>
  )
}

export default App
