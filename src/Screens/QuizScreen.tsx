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
    const [isAnswered, setIsAnswered] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [solution, setSolution] = useState("");
    const [isTimeUp, setIsTimeUp] = useState(false);

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
                        <div>
                            {gameQuestions[currentQuestion].cardAnswers.map((answerItem) => {
                                        return (
                                            <div className="cursor-pointer" onClick={() => handleAnswerClick(answerItem.id)} key={answerItem.id}>
                                                {answerItem.answer}
                                            </div>
                                        );
                                    })}
                        </div><br/>
                        <div>
                            {isAnswered && isAnswerCorrect &&
                                <div>
                                    <div>
                                        Gratulálok!
                                    </div>
                                    <div>A válaszod helyes!</div>
                                </div>
                            }
                        </div>
                        <div>
                            {isAnswered && !isAnswerCorrect &&
                                <div>
                                    <div>
                                        Sajnos a válaszod helytelen!
                                    </div>
                                    <div>A helyes válasz: </div>{solution}
                                </div>
                            }
                        </div>
                        <div>
                            {isAnswered &&
                                <div className="flex-row cursor-pointer" onClick={() => nextQuestion()}>
                                    OK
                                </div>
                            }
                        </div>
                    </div>
                    :
                    <div className='justify-center'>
                        <div className='text-xl'>
                            Játék vége
                        </div><br/>
                        <div>
                            Elért pontok: {correctAnswers}
                        </div>
                        <br/>
                        <div  className='flex justify-center'>
                            <NavigationButton setActiveScreen={props.setActiveScreen}
                                              nextScreen={'games'}>Új játék</NavigationButton>
                        </div>
                    </div>
                }
            </Card>
            <div className="max-w-[600px] mt-20">
                <img src={gameQuestions[currentQuestion].cardImage.toString()} alt="" className="object-none rounded-lg"/>
            </div>
        </div>
    );
};

export default QuizScreen;
