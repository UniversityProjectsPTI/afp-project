import React, { useState } from 'react';
import Card from '../Components/Card';
import QuizCounterHead from '../Components/QuizCounterHead';
import NavigationButton from '../Components/NavigationButton';
import questions from '../Config/questions';

const QuizScreen = (props: any) => {

    const [quizCounter, setQuizCounter] = useState(1);
    const quizQuestions = useState(3);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isGameEnd, setIsGameEnd] = useState(false);

    const gameQuestions = {...questions};

    const handleAnswerClick = (ansid: number) => {
        if (ansid === gameQuestions[currentQuestion].correctAnswer)
            setCorrectAnswers(correctAnswers+1);

        if (quizCounter !== 3){
            setQuizCounter(quizCounter+1);
            setCurrentQuestion(currentQuestion+1);
        } else {
            setIsGameEnd(true);
        }
    };

    return (
        <div className="flex justify-center p-2">
        <Card className="flex flex-row">
            
            <div className="flex-row">
                {gameQuestions[currentQuestion].cardQuestion}
            </div>

            {gameQuestions[currentQuestion].cardAnswers.map((answerItem) => {
                    return (
                        <div className="flex-row cursor-pointer" onClick={() => handleAnswerClick(answerItem.id)} key={answerItem.id}>
                            {answerItem.answer}
                        </div>
                    );
                })}
        
        </Card>
    </div>
    );
};

export default QuizScreen;
