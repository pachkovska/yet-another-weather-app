import React, {useEffect, useState} from 'react';
import './App.css';
import LocationInput from './components/LocationInput';
import RefreshButton from "./components/RefreshButton";
import axios from 'axios';
import WeatherData from "./components/WeatherData";
import DegreeScaleButtons from "./components/DegreeScaleButtons";

function App() {

    const [location, setLocation] = useState('Madrid, Spain');
    const [weatherData, setWeatherData] = useState({});
    const [degreeScale, setDegreeScale] = useState('°C');

    const handleLocationChange = (locationName) => {
        setLocation(locationName);
    }

    const getWeatherData = () => {
        const query = location.replace(/ /g, '+');
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=973f1d73a370ab053bfe7255e9bf56e9`;
        axios.get(url)
            .then(function (response) {
                console.log(response);
                setWeatherData({
                    name: response.data.name,
                    description: response.data.weather[0].main,
                    temperature: degreeScale === '°C' ? Math.round(response.data.main.temp - 273) : Math.round(1.8 * (response.data.main.temp - 273) + 32),
                    humidity: response.data.main.humidity,
                    feelsLike: degreeScale === '°C' ? Math.round(response.data.main.feels_like - 273) : Math.round(1.8 * (response.data.main.feels_like - 273) + 32),
                    wind: response.data.wind.speed,
                });
            })
            .catch(function (error) {
                console.log(error);
                alert('The location you entered was not found. Please check your spelling.');
            });
        setLocation('');
    }

    useEffect(() => {
        getWeatherData();
    }, []);

    const handleScaleChange = (scale) => {
        if (degreeScale !== scale && scale === '°F') {
            setDegreeScale(scale);
            setWeatherData({
                ...weatherData,
                temperature: Math.round(1.8 * weatherData.temperature + 32),
                feelsLike: Math.round(1.8 * weatherData.feelsLike + 32)
            });
        } else if (degreeScale !== scale && scale === '°C') {
            setDegreeScale(scale);
            setWeatherData({
                ...weatherData,
                temperature: Math.round((weatherData.temperature - 32) / 1.8),
                feelsLike: Math.round((weatherData.temperature - 32) / 1.8)
            });
        }
    }

    const weatherDataProps = {
        name: weatherData.name,
        description: weatherData.description,
        temperature: weatherData.temperature,
        humidity: weatherData.humidity,
        feelsLike: weatherData.feelsLike,
        wind: weatherData.wind,
        degreeScale: degreeScale,
    }

    const appClasses = ['App'];
    const desc = weatherData.description && weatherData.description.toLowerCase();
    if (desc && desc.includes('clear')) {
        appClasses.push('App--clear');
    } else if (desc && desc.includes('cloud')) {
        appClasses.push('App--cloud');
    } else if (desc && desc.includes('storm')) {
        appClasses.push('App--storm');
    } else if (desc && desc.includes('rain')) {
        appClasses.push('App--rain');
    }

    return (

        <div className={appClasses.join(' ')}>
            <div className={"weatherContainer"}>
                <DegreeScaleButtons
                    handleScaleChange={handleScaleChange}
                />
                <div className={"controls"}>
                    <LocationInput
                        handleLocationChange={(locationName) => handleLocationChange(locationName)}
                        location={location}
                    />
                    <RefreshButton
                        getWeatherData={getWeatherData}
                    />
                </div>
                <WeatherData
                    {...weatherDataProps}
                />
            </div>
        </div>
    );
}

export default App;
