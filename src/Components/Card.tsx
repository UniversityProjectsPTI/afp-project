import React from "react";

const Card = (props: any) => {
    return (
        <div className="shadow-lg w-[650px] h-[650px] rounded-lg bg-[#666666] mt-5 items-center
                        justify-center ml-8 text-base text-[#ffd428] font-medium text-center p-2">
            {props.children}
        </div>
    );
};

export default Card;