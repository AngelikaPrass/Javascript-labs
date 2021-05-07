'use strict';
const axios = require('axios');

// 2.1 StwĂłrz obiekt klasy Promise -> niech zakoĹczy siÄ powodzeniem (resolve) po 5 sekundach i zwrĂłci string 'UdaĹo siÄ!'. 
// Jako callback niech wypisze zwrĂłcony string w konsoli.
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {resolve("Udało się!");}, 5000);
// });
// promise1.then((value) => {
//     console.log(value);
// });



// 2.2 Zmodyfikuj powyĹźszy kod tak, aby zamiast z sukcesem - promise zakoĹczyĹ siÄ poraĹźkÄ i zwracaĹ string 'PoraĹźka'.
// Skorzystaj z then() aby obsĹuĹźyÄ bĹÄd.
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = true;
//         if(!error) {
//             resolve();
//         }
//         else {
//             reject('Porażka');
//         }
//     }, 5000);

// });
// function resolved(result) {
//     console.log('resolved');
// };

// function rejected(result) {
//     console.log('porażka');
// };

// Promise.reject(new Error('fail')).then(resolved, rejected);



// 2.3 Zamiast then(), zmodyfikuj powyĹźszy kod uĹźywajÄc catch()
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {reject("Porażka");}, 5000);
// });

// promise3.catch((value) => {
//     console.log(value);
// });
// 2.4 Napisz funkcjÄ multiplyAsync(x,y), ktĂłra zwraca obiekt klasy Promise, koĹczÄcy siÄ poraĹźkÄ, gdy ktĂłryĹ za argumentĂłw jest niepoprawny (nie jest liczbÄ).
// W przeciwnym przypadku zwraca iloczyn dwĂłch liczb. Napisz callback, ktĂłry wypisuje wynik w konsoli.

function multiplyAsync(x, y) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isNaN(x) || isNaN(y)){
                reject("Porażka");
            }
            else {
                resolve(x*y);
            }}, 5000);
    });
    promise.then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
};
multiplyAsync(2, 1);
multiplyAsync(4, 'i');
multiplyAsync(2, 5);


// 2.5 DoĹÄcz axios do projektu. Wykonaj funkcjÄ get dla nastÄpujÄcego url: https://jsonplaceholder.typicode.com/posts. 
// Jako pierwszy callback - sprawdĹş czy response jest poprawny (status rĂłwny 200). JeĹli tak, to zwrĂłÄ response, w przeciwnym wypadku wypisz bĹÄd w konsoli.
// Jako nastÄpny callback - uĹźyj destrukcji obiektĂłw, aby wypisaÄ w konsoli zmiennÄ 'data' i 'headers'.



/* 2.6 StwĂłrz funkcjÄ, ktĂłra przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

NastÄpnie wysyĹa taki obiekt za pomocÄ funkcji post z biblioteki axios pod url: https://jsonplaceholder.typicode.com/todos.
JeĹli dodanie zakoĹczy siÄ sukcesem - wyĹwietli w konsoli komunikat 'Dodano' i wyĹwietli id dodanego obiektu. W przeciwnym wypadku wypisze bĹÄd.
*/