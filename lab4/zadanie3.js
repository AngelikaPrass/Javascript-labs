// Napisz skrypt, który będzie na wejściu będzie przyjmował tablicę liczb, a zwracał indeksy elementów z wartościami, jakie się pod nim znajdują.

// Input: [ 1, 3, 6, 2, 9]
// Output:
// 0: 1
// 1: 3
// 2: 6
// 3: 2
// 4: 9

const tablica = [1, 4, 66, 0.3, 2.1, 33];

tablica.reduce((previousVal, currentVal, index) => {
    console.log(index + ": " + currentVal);
    return currentVal
}, [])
