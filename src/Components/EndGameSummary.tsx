import React from 'react';
import NavigationButton from "./NavigationButton";

const EndGameSummary = (props: any) => {
    return (
        <div>
            <div className='justify-center'>
                <div className='text-xl'>
                    Játék vége
                </div>
                <div>
                    Elért pontok: {props.correctAnswers}
                </div>

                <div  className='flex justify-center'>
                    <NavigationButton setActiveScreen={props.setActiveScreen}
                                      nextScreen={'games'}>Új játék</NavigationButton>
                </div>
            </div>

        </div>
    );
};

export default EndGameSummary;
