import React, { useState } from 'react';
import Header from './components/Header/Header';
import PlaceList from './components/PlaceList/PlaceList';
import Footer from './components/Footer/Footer';
import placesDataJSON from './challenge/stays.json';
import './App.css';

function App() {

  const [placesData, setPlacesData] = useState(placesDataJSON);

  const handleSearch = (data) => {
    console.log("search:", data)
  }

  return (
    <div className="App">
      <Header search={handleSearch} />
      <PlaceList list={placesData} />
      <Footer />
    </div>
  );
}

export default App;
