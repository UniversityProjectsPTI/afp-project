import React from 'react';
import Card from '../Components/Card';
import NavigationButton from '../Components/NavigationButton';

const GamesScreen = (props: any) => {
    return (
        <div className="flex items-center justify-center text-center p-2">
            <Card additionClass="mt-5">
                <div className="mt-20">
                    <h2 className="font-bold text-3xl text-[#ffd428] uppercase my-15">Kvízjáték</h2>
                    <h3 className="text-2xl p-2 mt-10">Teszteld a tudásod egy kvíz játékkal.</h3>
                    <div className="flex items-center justify-center text-center mt-6">
                        <NavigationButton setActiveScreen={props.setActiveScreen} nextScreen={'quizGame'}>A kvízjáték indítása</NavigationButton>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default GamesScreen;