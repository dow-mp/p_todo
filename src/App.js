import {Header} from './components/Header'
import {NavBar} from './components/NavBar'
import {Boxes} from './components/Boxes'
import {Footer} from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Boxes />
      <Footer year={Date()}/>
    </div>
  );
}

export default App;
