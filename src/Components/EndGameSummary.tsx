import React from 'react';
import NavigationButton from "./NavigationButton";

const EndGameSummary = (props: any) => {
    return (
        <div className="mt-5 text-center">
            <div className='justify-center text-2xl'>
                <div className="mb-2">
                    Játék vége
                </div>
                <div className="mb-3">
                    Elért pontok: {props.correctAnswers}
                </div>
                <div className="text-lg">
                    Köszönjük, hogy velünk játszottál.<br/>
                    Kérlek térj vissza főmenübe.
                </div>

                <div  className='flex justify-center'>
                    <NavigationButton setActiveScreen={props.setActiveScreen}
                                      nextScreen={'games'}>Vissza</NavigationButton>
                </div>
            </div>

        </div>
    );
};

export default EndGameSummary;
