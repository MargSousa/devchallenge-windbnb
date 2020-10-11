import React from 'react';
import Place from '../Place/Place';
import './PlaceList.css';

const PlaceList = (props) => {

  const dataLength = props.list.length;
  const city = props.list[0].city;

  return (
    <div className="PlaceList">
      <div className="list-header">
        <div className="main-title">Stays in Finland, {city}</div>
        <div className="number-stays">{dataLength} stays</div>
      </div>
      <div className="main-list">
        {props.list && props.list.map(place =>
          <Place place={place} />
        )}
      </div>
    </div>
  );
}
 
export default PlaceList;