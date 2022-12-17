import React from 'react';
import NavigationButton from '../Components/NavigationButton';

const HomeScreen = (props: any) => {
    return (
        <div className="flex justify-center h-screen items-center flex-col">
            <h2 className="font-bold text-4xl text-[#ffd428] uppercase">Üdvözöllek!</h2>
            <NavigationButton setActiveScreen={props.setActiveScreen} nextScreen={'games'}>tovább</NavigationButton>
        </div>
    );
};

export default HomeScreen;
