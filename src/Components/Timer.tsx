import React from 'react';
import {useState, useEffect} from "react";

const Timer = (props: any) => {

    const [remainingTime, setRemainingTime] = useState(props.time);
    const [percentageNum, setPercentageNum] = useState(100);

    const timerDecreaseWidth = () => {
        const decreaseRatio = 100 / props.time;
        setPercentageNum(percentageNum-decreaseRatio);
    }

    useEffect(() => {
        if (remainingTime === 0) {
            onEnd();
        } else {
            const intervalID = setInterval(() => {
                setRemainingTime(remainingTime - 1);
                timerDecreaseWidth();
            }, 1000);
            return () => clearInterval(intervalID);
        }
    }, [remainingTime]);


    const onEnd = () => {
        //
    }

    return (
        <div className="flex flex-row justify-center items-center space-x-5">
            <div className="rounded-full">
                <div className="w-[300px] bg-gray-400 h-2 rounded-full">
                    <div className="bg-[#ffd428] h-2 rounded-full transform" style={{width: percentageNum+'%'}}></div>
                </div>
            </div>
            <div className="w-20 mb-1">
                <div className="text-xl font-bold text-white">{remainingTime} mp</div>
            </div>
        </div>
    );
};

export default Timer;
