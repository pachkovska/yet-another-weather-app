import React from "react";

function DegreeScaleButtons({handleScaleChange, degreeScale}) {

    const onScaleChange = (scale) => {
        handleScaleChange(scale);
    }

    return (
        <div className={"degreeScale-controls"}>
            <button onClick={() => onScaleChange('°C')}
                    disabled={degreeScale === '°C'}
            >
                Show °C
            </button>
            <button onClick={() => onScaleChange('°F')}
                    disabled={degreeScale === '°F'}
            >
                Show °F
            </button>
        </div>
    )
}

export default DegreeScaleButtons;