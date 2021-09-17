const squares = document.querySelectorAll('.square');
const clearBtn = document.querySelector('.clear-btn');

// for (let i = 0; i < squares.length; i++) {
//     squares[i]['style'].background = 'red'
// }

const pairedNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const unpairedNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];

let clicks = 0;
let amountOfCircles = 0;
let amountOfCrosses = 0;


for (const square of squares) {
    square.addEventListener('click', () => {

        clicks++;

        for (let a = 0; a < unpairedNumbers.length; ++a) {
            if (clicks === unpairedNumbers[a]) {
                $(square).append('<div class="cross">X</div>');
            };
        };

        for (let b = 0; b < pairedNumbers.length; ++b) {
            if (clicks === pairedNumbers[b]) {
                $(square).append('<div class="circle">O</div>');
            };
        };
    });

    clearBtn.addEventListener('click', () => {
        $('.cross').remove();
        $('.circle').remove();
    });
};