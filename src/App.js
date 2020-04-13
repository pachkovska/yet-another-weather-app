import React, {useState} from 'react';
import './App.css';
import LocationInput from './components/LocationInput';
import RefreshButton from "./components/RefreshButton";
import axios from 'axios';
import WeatherData from "./components/WeatherData";

function App() {

    const [location, setLocation] = useState('');
    const [weatherRequested, setWeatherRequested] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    const handleLocationChange = (locationName) => {
        setLocation(locationName);
    }

    const handleWeatherRefresh = () => {
        setWeatherRequested(!weatherRequested);
    }

    const getWeatherData = () => {
        const query = location.replace(/ /g, '+');
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
            query + '&appid=973f1d73a370ab053bfe7255e9bf56e9';
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log(response);
                setWeatherData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    return (
        <div className="App">
            <LocationInput
                handleLocationChange={(locationName) => handleLocationChange(locationName)}
            />
            <RefreshButton
                handleWeatherRefresh={handleWeatherRefresh}
            />
            <WeatherData
                getWeatherData={getWeatherData}
            />
        </div>
    );
}

export default App;
