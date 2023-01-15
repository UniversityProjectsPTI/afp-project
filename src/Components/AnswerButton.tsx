import React from "react";

const AnswerButton = (props: any) => {
    return (
        <button type="button" className="rounded-full border-2 border-[#ffd428] mx-5 flex items-center justify-center ml-8 hover:text-white text-xl text-[#ffd428] font-medium text-center w-12 h-12">
            {props.answerNumber}
        </button>
    );
};

export default AnswerButton;