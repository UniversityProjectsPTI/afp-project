import React from "react";

const NavigationButton = (props: any) => {
    return (
        <button type="button" className="rounded-md border-2 border-[#ffd428] mt-5 flex items-center 
        justify-center ml-8 hover:text-white text-xl text-[#ffd428] font-medium text-center p-2"
        onClick={() => props.setActiveScreen(props.nextScreen)}>
            {props.children}
        </button>
    );
};

export default NavigationButton;