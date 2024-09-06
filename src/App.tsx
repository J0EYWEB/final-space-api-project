import './App.scss'
import CharacterCard from './components/CharacterCard/CharacterCard'
import Heading from './components/Heading/Heading'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <>
      <Heading heading="Final Space Character Database" />
      <main>
      <Nav />
      <CharacterCard />
      </main>
    </>
  )
}

export default App
