import React from 'react';
import {useState, useEffect} from "react";

const Timer = (props: any) => {

    const [isCountedDown, setIsCountedDown] = useState(false);
    const [remainingTime, setRemainingTime] = useState(props.time);

    useEffect(() => {
        if (remainingTime === 0) {
            setIsCountedDown(true);
            onEnd();
        } else {
            const intervalID = setInterval(() => {
                setRemainingTime(remainingTime - 1);
            }, 1000);
            return () => clearInterval(intervalID);
        }
    }, [remainingTime]);


    const onEnd = () => {
        //
    }

    return (
        <div>
            <p className="text-2xl text-white">{remainingTime} mp</p>
        </div>
    );
};

export default Timer;
