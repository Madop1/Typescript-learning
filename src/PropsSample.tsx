import React from 'react';
import { propsApp } from "./interface";

export function PropsSample({ propName, propNumber = 22 }: propsApp) {
    return (
        <>
            <div className="App">
                {propName}
                <p>{propNumber}</p>
            </div>
        </>
    );
}

export default PropsSample;