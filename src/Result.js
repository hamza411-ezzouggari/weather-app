/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-concat */

import React from 'react';
import "weather-icons/css/weather-icons.css";
import logo from './icon1.png';
import log from './icon2.png'
export default function Country({data}){
    const iconurl=
    "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    console.log(iconurl)
    return(
        <div className="Result">
            <div className="tout">
            <div className="wrapper">
            <div className="country">
                <h1>
                    {data.sys.country}
                </h1>
            </div>
                <div className="villa">
                <h1 className="villa" >
                    {data.name}
                </h1>
                </div>
            </div>
            <div className="value">
            <div className="value2">
                <h1 className="pay2">
                    {Math.floor((data.main.temp)-273.15)}&deg;
                </h1>
            </div>
            <div className="icon">
                <img className="cloud" src={iconurl} alt={data.weather[0].description}  />
            </div> 
            </div>
            <div className="min">
                <h1 className="com">
                    {data.weather[0].description}
                </h1>
            </div>   
            <div className="ida">
                <div className="icon1">
                        <h1>humidity</h1>
                        <img src={logo} alt="Logo" />
                        <h1>{data.main.humidity}%</h1>
                </div>
                <div className="icon2">
                        <h1>speed air</h1>
                        <img src={log} alt="Logo" />
                        <h1>{data.wind.speed}km/h</h1>
                </div>
            </div> 
            </div> 
        </div>
    );
}