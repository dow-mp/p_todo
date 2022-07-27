import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Boxes } from './components/Areas'
import { Footer } from './components/Footer'
import { Slider } from './components/Slider'

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Slider 
        initial={10} 
        max={25} 
        onChange={value => console.log(value)}
        formatFn={number => number.toFixed(0)}
      />
      <Boxes />
      <Footer year={Date()}/>
    </>
  );
}

export default App;
