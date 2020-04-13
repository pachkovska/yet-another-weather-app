import React from "react";

function RefreshButton({handleWeatherRefresh}) {

    const onRefreshClick = () => {
        handleWeatherRefresh(true);
    }

    return (
        <button onClick={onRefreshClick}>
            REFRESH
        </button>
    )
}

export default RefreshButton;