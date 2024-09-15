import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import CharacterInfo from './pages/CharacterInfo/CharacterInfo';
import Characters from './data/Types/Characters';
import PageNav from './containers/PageNav/PageNav';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';


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

  return (
    <BrowserRouter>
    <>
      <PageNav />
      <Routes>
        <Route path='/final-space-api-project/' element={<WelcomePage />} />
        <Route path='/final-space-api-project/characters' element={<CharacterPage data={char} original={characterSeachDefault} setChar={setChar} reset={getCharacterList} />}/>
        <Route path='/final-space-api-project/characters/:id' element={<CharacterInfo characters={char}/>}/>
      </Routes>
    </>
    
    </BrowserRouter>
  )
}

export default App
