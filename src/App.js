import { Header } from './components/Header'
import { Areas } from './components/Areas'
import { Footer } from './components/Footer'
import { Slider } from './components/Slider';
import { useState } from 'react';
import { AreaBox } from './components/AreaBox';
import React from 'react';

function App() {
  // setting state for the AreaBox title value here so that it can be set in the AddItemBox within the header component which calls back to the app component and that value can then be passed into the corresponding AreaBox
  const [areaTitle, setAreaTitle] = useState("");

  // setting state to allow conditional display of the AreaBox to track to do items for a specific area (need to figure out how to allow multiple areaBoxes to be displayed...set state for each one?)
  const [areaBox, setAreaBox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // when the submit button in the header's AddItemBox is clicked, a new AreaBox should display on the screen containing all of the standard items within the AreaBox plus the specific header named from the input value (does this need to be stateful??) 
    setAreaBox(true);
    return areaBox;
  }

  // currently this sets the areaTitle to the value of the input field as it changes (need to update this to accept the value of the input field only once its been submitted - atm this changes the h1 in the header component but would like to continue to pass this value on to the the area that is being created once the submit button is clicked.)
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setAreaTitle(e.target.value);
  }

  return (
    <>
      <Header area={areaTitle} onSubmit={handleSubmit} onChange={handleChange}/>
      <Areas display={areaBox}/>
      {/* <Slider 
        initial={10} 
        max={25} 
        onChange={value => console.log(value)}
        formatFn={number => number.toFixed(0)}
      /> */}
      <Footer year={new Date()}/>
    </>
  );
}

export default App;
