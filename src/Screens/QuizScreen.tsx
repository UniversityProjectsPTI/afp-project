import React, { useState } from 'react';
import Card from '../Components/Card';
import QuizCounterHead from '../Components/QuizCounterHead';
import NavigationButton from '../Components/NavigationButton';
import questions from '../config/questions';

const QuizScreen = (props: any) => {

    const [quizCounter, setQuizCounter] = useState(1);
    const quizQuestions = useState(3);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isGameEnd, setIsGameEnd] = useState(false);

    const gameQuestions = {...questions};

    return (
        <div className="flex justify-center p-2">
        <Card className="flex flex-row">

            <div className="flex-row">
                {gameQuestions[currentQuestion].cardQuestion}
            </div>

            

        </Card>
    </div>
    );
};

export default QuizScreen;
