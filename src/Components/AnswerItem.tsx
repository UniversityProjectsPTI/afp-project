import React from 'react';
import AnswerButton from "./AnswerButton";

const AnswerItem = (props: any) => {
    return (
        <div className="text-left mx-4">
            {props.gameQuestions[props.currentQuestion].cardAnswers.map((answerItem: any) => {
                return (
                    <div onClick={() => props.handleAnswerClick(answerItem.id)}>
                        <div className="inline-flex justify-center items-center my-3">
                            <div>
                                <AnswerButton answerNumber={answerItem.id}/>
                            </div>
                            <div className="cursor-pointer text-xl" key={answerItem.id}>
                                {answerItem.answer}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AnswerItem;
