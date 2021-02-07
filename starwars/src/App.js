import React, {useState, useEffect} from 'react';
import CharacterList from './components/characterList';
import './App.css';
import axios from "axios";

function App() {

  let [data, setData] = useState([]);

  axios
  .get("https://swapi.co/api/people/")
  .then (response => {
    setData(response.data.results);
  })
  .catch(error => {
    console.log(error);
  });
// } , []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterList characterData={data} />
    </div>
  );
}

export default App;

