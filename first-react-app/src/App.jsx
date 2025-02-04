import './App.css'
import Goods from './components/Goods/Goods'
import Navigation from './components/Navigation/Navigation'
import Services from './components/Services/Services'

import logo from './assets/react.svg'
import CustomButton from './components/CustomButton'
import Container from './components/Container/Container'

function App() {
  return (
    <>
      <Container>
        <Navigation />
      </Container>

      <main>
        <h1>Mano puslapis</h1>

        <Services />
        <Goods />
      </main>

      <footer>
        <Container>
          <p>Footer</p>

          <CustomButton>Hello</CustomButton>

          <CustomButton test='labas'>
            <img src={logo} /> Hello
          </CustomButton>

          <CustomButton>
            <div>Good</div>
            <div>Evening</div>
          </CustomButton>
        </Container>
        
      </footer>
    </>
  )
}

export default App
