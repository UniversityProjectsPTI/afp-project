export{}

interface IAnswer {
    id: number;
    answer: String;
}

interface ICard {
    id: number;
    cardQuestion: String;
    cardAnswers: IAnswer []
    correctAnswer: number;
    cardImage: String;
}

const cardConfig: ICard[] = [
    {
        id: 42,
        cardQuestion: 'A válasz a végső kérdésre...',
        cardAnswers: [
            {
                id: 1,
                answer: '13'
            },
            {
                id: 2,
                answer: '42'
            },
            {
                id: 3,
                answer: '78'
            },
            {
                id: 4,
                answer: '47'
            }
        ],
        correctAnswer: 2,
        cardImage: 'Images/CardImages/q000042.png'
    }
]


