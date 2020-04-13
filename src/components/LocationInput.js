import React from "react";

function LocationInput ({handleLocationChange}) {

    const onLocationChange = (ev) => {
        const location = ev.target.value;
        handleLocationChange(location);
    }

    return (
        <input placeholder={"Enter city name"} onChange={onLocationChange}></input>
    )
}

export default LocationInput;