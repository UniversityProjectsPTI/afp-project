import React from "react";

const NavigationButton = (props: any) => {
    return (
        <div class="rounded-lg border-2 border-[#ffd428] mt-5 flex items-center justify-center ml-8 hover:text-white text-base text-[#ffd428] font-medium text-center p-2">
            {props.children}
        </div>
    );
};

export default NavigationButton;