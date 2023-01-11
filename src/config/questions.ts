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
        id: 1,
        cardQuestion: 'Melyik mértékegységet használjuk az áramerősség mérésére?',
        cardAnswers: [
            {
                id: 1,
                answer: 'Amper'
            },
            {
                id: 2,
                answer: 'Watt'
            },
            {
                id: 3,
                answer: 'Volt'
            }
        ],
        correctAnswer: 1,
        cardImage: 'Images/CardImages/q000001.png'
    },
    {
        id: 2,
        cardQuestion: 'Melyik a hatodik bolygó a Naptól?',
        cardAnswers: [
            {
                id: 1,
                answer: 'Szaturnusz'
            },
            {
                id: 2,
                answer: 'Uránusz'
            },
            {
                id: 3,
                answer: 'Mars'
            },
            {
                id: 4,
                answer: 'Pluto'
            }
        ],
        correctAnswer: 1,
        cardImage: 'Images/CardImages/q000002.png'
    },
    {
        id: 3,
        cardQuestion: 'Melyik kémiai elem vegyjele az "Ag"?',
        cardAnswers: [
            {
                id: 1,
                answer: 'Arany'
            },
            {
                id: 2,
                answer: 'Ezüst'
            },
            {
                id: 3,
                answer: 'Argon'
            }
        ],
        correctAnswer: 2,
        cardImage: 'Images/CardImages/q000003.png'
    },
    {
        id: 4,
        cardQuestion: '0,2 kilométer az hány méter?',
        cardAnswers: [
            {
                id: 1,
                answer: '20 000 méter'
            },
            {
                id: 2,
                answer: '2000 méter'
            },
            {
                id: 3,
                answer: '200 méter'
            }
        ],
        correctAnswer: 3,
        cardImage: 'Images/CardImages/q000004.png'
    },
    {
        id: 5,
        cardQuestion: 'Melyik a leghosszabb folyó a világon?',
        cardAnswers: [
            {
                id: 1,
                answer: 'Amazonas'
            },
            {
                id: 2,
                answer: 'Nílus'
            },
            {
                id: 3,
                answer: 'Jangce'
            }
        ],
        correctAnswer: 1,
        cardImage: 'Images/CardImages/q000005.png'
    },
    {
        id: 6,
        cardQuestion: 'Hogy írjuk arab számmal a római LXXVII számot?',
        cardAnswers: [
            {
                id: 1,
                answer: '527'
            },
            {
                id: 2,
                answer: '77'
            },
            {
                id: 3,
                answer: '127'
            }
        ],
        correctAnswer: 2,
        cardImage: 'Images/CardImages/q000006.png'
    },
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