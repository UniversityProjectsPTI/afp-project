export interface IQuestion {
    id: number;
    question: string;
    correctAnswer: string;
    answer1: string;
    answer2: string;
}


const questions: IQuestion[] = [
    {
        id: 1,
        question: 'A reukrzió minden esetben lassabb mint az iteratív megvalósítás.',
        correctAnswer: 'Igaz',
        answer1: 'Igaz',
        answer2: 'Hamis'
    },{
        id: 2,
        question: 'Melyik mértéket használjuk az áramerősség mérésére?',
        correctAnswer: 'Amper',
        answer1: 'Amper',
        answer2: 'Volt'
    },{
        id: 3,
        question: 'Melyik a 6. bolygó a naptól?',
        correctAnswer: 'Szaturnusz',
        answer1: 'Uránsz',
        answer2: 'Szaturnusz',
    } 
];

export default questions;