import React from "react";

function DegreeScaleButtons({handleScaleChange}) {

    const onScaleChange = (scale) => {
        handleScaleChange(scale);
    }

    return (
        <div className={"degreeScale-controls"}>
            <button onClick={() => onScaleChange('°C')}>
                Show °C
            </button>
            <button onClick={() => onScaleChange('°F')}>
                Show °F
            </button>
        </div>
    )
}

export default DegreeScaleButtons;