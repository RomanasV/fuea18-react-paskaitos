import './App.css'
import Goods from './components/Goods/Goods'
import Navigation from './components/Navigation/Navigation'
import Services from './components/Services/Services'

function App() {
  return (
    <>
      <Navigation />


      <main>
        <h1>Mano puslapis</h1>

        <Services />
        <Goods />
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  )
}

export default App
