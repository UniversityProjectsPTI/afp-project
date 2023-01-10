import React, {useState} from 'react';
import Card from '../Components/Card';
import QuizCounterHead from '../Components/QuizCounterHead';
import questions from '../config/questions';
import NavigationButton from '../Components/NavigationButton';

const QuizScreen = (props: any) => {

    const [quizCounter, setQuizCounter] = useState(1);
    const quizQuestions = useState(3);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isGameEnd, setIsGameEnd] = useState(false);

    const gameQuestions = {...questions};
    const gameAnswer1 = gameQuestions[currentQuestion].answer1;
    const gameAnswer2 = gameQuestions[currentQuestion].answer2;

    const handleAnswerClick = (ans: string) => {
        if (ans === gameQuestions[currentQuestion].correctAnswer)
            setCorrectAnswers(correctAnswers+1);

        if (quizCounter !== 3){
            setQuizCounter(quizCounter+1);
            setCurrentQuestion(currentQuestion+1);
        } else {
            setIsGameEnd(true);
        }
    };



    return (
        <div className="flex items-center justify-center text-center p-2">
            <Card className='flex items-center justify-center text-center p-2'>

                {!isGameEnd ?
                    <div>
                        <QuizCounterHead currentQuestion={quizCounter} questionNumbers={quizQuestions}/><br/>
                        
                        <div>
                            {gameQuestions[currentQuestion].question}
                        </div>

                        <div className='mt-5 bold' onClick={() => handleAnswerClick(gameAnswer1)}>
                            {gameQuestions[currentQuestion].answer1}
                        </div>
                        <div className='mt-5 bold' onClick={() => handleAnswerClick(gameAnswer2)}>
                            {gameQuestions[currentQuestion].answer2}
                        </div>
                    </div>
                    : 
                    <div>
                        <div>
                            Játék vége
                        </div>
                        <div>
                            Elért pontok: {correctAnswers}
                        </div>
                        <div className='mt-5'>
                            Visszatérés a játékválasztó képernyőre.
                        </div>
                        <div className='flex justify-center'>
                            <NavigationButton setActiveScreen={props.setActiveScreen} nextScreen={'games'}>Vissza</NavigationButton>
                        </div>
                    </div>
                }

            </Card>
        </div>
    );
};

export default QuizScreen;
