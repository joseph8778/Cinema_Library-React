import styles from "../Directory.module.css"
import React, { useState } from 'react';
import { Slider } from './ui/slider';

const YearSlider = () => {
const [year, setYear] = useState([]);

    return (
        <>
        <div className={styles.slider__wrapper}>
            <Slider 
            width="200px"
            min={1888}
            max={2024} 
            defaultValue={[1888, 2024]}
            onValueChange((e) => )
            colorPalette="red"
            />
            <div className="slider__text">
                <h1>Years: 1888-2024</h1>
            </div>
            </div>
        </>
    );
}

export default YearSlider;
