import React, { useState } from 'react';
import Card from '../Components/Card';
import QuizCounterHead from '../Components/QuizCounterHead';
import questions from '../config/questions';
import AnswerItem from "../Components/AnswerItem";
import QuizEvaluation from "../Components/QuizEvaluation";
import EndGameSummary from "../Components/EndGameSummary";
import Timer from "../Components/Timer";

const QuizScreen = (props: any) => {

    const [quizCounter, setQuizCounter] = useState(1);
    const quizQuestions = useState(3);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isGameEnd, setIsGameEnd] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [solution, setSolution] = useState("");
    const [isCountedDown, setIsCountedDown] = useState(false);

    const gameQuestions = {...questions};

    const handleAnswerClick = (ansid: number) => {
        if (isAnswered) return;
        setIsAnswered(true);
        setSolution(gameQuestions[currentQuestion].cardAnswers[gameQuestions[currentQuestion].correctAnswer-1].answer.toString());
        if (ansid === gameQuestions[currentQuestion].correctAnswer) {
            setCorrectAnswers(correctAnswers+1);
            setIsAnswerCorrect(true);
        }
    };

    const nextQuestion = () => {
        if (quizCounter !== 3){
            setQuizCounter(quizCounter+1);
            setCurrentQuestion(currentQuestion+1);
            setIsAnswered(false);
            setIsAnswerCorrect(false);
            setIsCountedDown(false);
        } else {
            setIsGameEnd(true);
        }
    }

    return (
        <div className="flex justify-center pt-6">
            <Card additionClass={'mx-20'}>
                {!isGameEnd ?
                    <div>
                        <QuizCounterHead currentQuestion={quizCounter} questionNumbers={quizQuestions}/>

                        <div className="flex-row text-xl mb-5">
                            {gameQuestions[currentQuestion].cardQuestion}
                        </div>

                        {isAnswered || isCountedDown ?
                                <QuizEvaluation isCorrectAnswer={isAnswerCorrect} nextQuestion={nextQuestion} solution={solution}/>
                            :
                                <div>
                                    <AnswerItem gameQuestions={gameQuestions} currentQuestion={currentQuestion} handleAnswerClick={handleAnswerClick}/>
                                    <Timer time="5" setIsCountedDown={setIsCountedDown}/>
                                </div>
                        }
                    </div>
                    :
                    <EndGameSummary correctAnswers={correctAnswers} setActiveScreen={props.setActiveScreen}/>
                }
            </Card>
            <div className="max-w-[600px] mt-20">
                <img src={gameQuestions[currentQuestion].cardImage.toString()} alt="" className="object-none rounded-lg"/>
            </div>
        </div>
    );
};

export default QuizScreen;
