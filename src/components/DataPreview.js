import React from 'react';

const DataPreview = (data) => (
    <div className="DataPreview">
      <div className="location-name">
        {data.locationName}
      </div>
      <div className="temperture">
        <label>Temperture:</label>
        <span>{data.temperture}c</span>
      </div>
      <div className="humidity">
        <label>Humidity:</label>
        <span>{data.humidity}%</span>
      </div>
      <div className="windspeed">
        <label>Wind Speed:</label>
        <span>{data.windSpeed}km/h</span>
      </div>
      <div>
        <img src={data.iconOfWeatherState} className="iconOfWeatherState">

        </img>
      </div>
    </div>
);


export default DataPreview;