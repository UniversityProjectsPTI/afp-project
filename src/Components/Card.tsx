import React from "react";

const Card = (props: any) => {
    return (
        <div className={`shadow-lg w-[650px] h-[650px] rounded-lg bg-[#666666] items-center justify-center text-base text-[#ffd428] 
                        font-medium text-center ${props.additionClass}`}>
            {props.children}
        </div>
    );
};

export default Card;