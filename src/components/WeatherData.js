import React from "react";

function WeatherData({name, wind, description, humidity, feelsLike, temperature, degreeScale}) {

    return (
        <div className={"weatherDashboard"}>
            <div className={"weatherDashboard-location"}>
                {name}
            </div>
            <div className={"weatherDashboard-overview"}>
                <div className={"weatherDashboard-temp"}>
                    {temperature} {degreeScale}
                </div>
                <div className={"weatherDashboard-desc"}>
                    {description}
                </div>
            </div>
            <div className={"weatherDashboard-details"}>
                <div className={"weatherDashboard-label"}>Feels like</div>
                <div className={"weatherDashboard-data"}>
                    {feelsLike} {degreeScale}
                </div>
                <div className={"weatherDashboard-label"}>Wind</div>
                <div className={"weatherDashboard-data"}>
                    {wind} km/h
                </div>
                <div className={"weatherDashboard-label"}>Humidity</div>
                <div className={"weatherDashboard-data"}>
                    {humidity} %
                </div>
            </div>
        </div>
    )
}

export default WeatherData;