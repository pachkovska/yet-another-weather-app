import React from "react";

function RefreshButton({getWeatherData}) {

    const onRefreshClick = () => {
        getWeatherData();
    }

    return (
        <button onClick={onRefreshClick}>
            REFRESH
        </button>
    )
}

export default RefreshButton;