import React, { useState } from 'react';
import logo from '../../challenge/logo.png';
import './Header.css';

const Header = (props) => {

  const [place, setPlace] = useState('Finland, Helsinki');
  const [numberPeople, setNumberPeople] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchData = {};
    searchData.place = place;
    searchData.people = numberPeople;
    props.search(searchData)
  }

  return (
    <div className="Header">
      <div className="logo-section">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search-section">
        <form onSubmit={handleSubmit}>
          <input type="text" className="where" name="where" value={place} placeholder="Search place..." onChange={(event) => setPlace(event.target.value)} />
          <input type="text" className="people" name="people" value={numberPeople} placeholder="Add guests" onChange={(event) => setNumberPeople(event.target.value)} />
          <button type="submit" className="search-button">
            <i className="material-icons">search</i>
          </button>
        </form>
      </div>
    </div>
  );
}
 
export default Header;