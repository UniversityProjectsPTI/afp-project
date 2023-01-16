import React, {useState} from 'react';

const QuizEvaluation = (props: any) => {

    const [isCorrectAnswer, setIsCorrectAnswer] = useState(props.isCorrectAnswer);

    return (
       <div className="text-xl mt-5">
           {isCorrectAnswer ?
                <div>
                    <div className="pb-1">
                        Gratulálok!
                    </div>
                    <div  className="pb-1">
                        A válaszod helyes!
                    </div>
                    <div className="font-bold underline cursor-pointer" onClick={() => props.nextQuestion()}>
                        OK
                    </div>
                </div>
           :
                <div>
                    {props.isCountedDown ? 
                        <div>
                            <div className="pb-1">
                                Sajnos lejárt az időd!
                            </div>
                            <div className="pb-1">
                                A helyes válasz: <span className="underline">{props.solution}</span>
                            </div>
                            <div className="font-bold underline cursor-pointer" onClick={() => props.nextQuestion()}>
                                OK
                            </div>
                        </div>    
                        :
                        <div>
                            <div className="pb-1">
                                Sajnos a válaszod helytelen!
                            </div>
                            <div className="pb-1">
                                A helyes válasz: <span className="underline">{props.solution}</span>
                            </div>
                            <div className="font-bold underline cursor-pointer" onClick={() => props.nextQuestion()}>
                                OK
                            </div>
                        </div>    
                    }
                    
                </div>
           }
       </div>
    );
};

export default QuizEvaluation;
