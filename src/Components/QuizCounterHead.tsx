import React, {useState} from 'react';
import Card from '../Components/Card';

const QuizCounterHead = (props: any) => {

    return (
        <div className="flex items-center justify-center text-center">
            {props.currentQuestion} / {props.questionNumbers}
        </div>
    );
};

export default QuizCounterHead;