import React from 'react';
import Card from '../Components/Card';

const GamesScreen = (props: any) => {
    return (
        <div className="flex items-center justify-center text-center p-2">
            <Card className="flex items-center justify-center text-center p-2">
                <div className="mb-20">
                    <h2 className="font-bold text-3xl text-[#ffd428] uppercase my-15">Kvízjáték</h2>
                    <h3 className="text-2xl p-2 mt-10">Teszteld a tudásod egy kvíz játékkal.</h3>
                </div>
            </Card>
        </div>
    );
};

export default GamesScreen;