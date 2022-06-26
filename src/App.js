import {Header} from './components/Header'
import {NavBar} from './components/NavBar'
import {ToDoBox} from './components/ToDoBox'
import {AddItemBox} from './components/AddItemBox'
import {Footer} from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ToDoBox />
      <AddItemBox />
      <Footer />
    </div>
  );
}

export default App;
