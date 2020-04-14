import React from "react";

function LocationInput ({handleLocationChange, location}) {

    const onLocationChange = (ev) => {
        const location = ev.target.value;
        const regex = RegExp('[^\\s,a-zA-Z]');
        if (regex.test(location)) {
            alert('Sorry non-letters are not allowed. ');
            return;
        }
        handleLocationChange(location);
    }

    return (
            <input placeholder={"Enter city name"} value={location} onChange={onLocationChange}></input>
    )
}

export default LocationInput;