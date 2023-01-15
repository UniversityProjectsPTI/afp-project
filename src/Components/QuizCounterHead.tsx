import React, {useState} from 'react';
import Card from '../Components/Card';

const QuizCounterHead = (props: any) => {

    return (
        <div className="flex items-center justify-center my-5 text-3xl text-center font-bold">
            {props.currentQuestion} / {props.questionNumbers}
        </div>
    );
};

export default QuizCounterHead;