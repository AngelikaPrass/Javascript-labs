'use strict';
// Zadanie 1.1. Dopisz do pomiędzy deklaracją funkcji helloWorld, a poleceniem console.log instrukcję wywołania helloWorld() tak, aby na ekranie pojawiło się jako pierwsze 'No, hello universe!'.
// Nie możesz dopisać nic za console.log()


// function helloWorld() {
//     console.log('Hello world!');
// }
// setTimeout(helloWorld, 0); // rzeczy asynchroniczne wykonają się po zakończeniu synchronicznych :)

// console.log('No, hello universe!');

// Zadanie 1.2. Napisz funkcję, która wypisuje 'Welcome' co sekundę w nieskończoność.
function welcome() {
    console.log('Welcome');
}
// setInterval(welcome, 1000);
// Zadanie 1.3. Napisz funkcję, która wypisuje 'Welcome' co sekundę, ale tylko przez 5 sekund. Podpowiedź: (użyj clearInterval)
// let counter = 0;
// let wynik = setInterval(() => {
//     counter +=1
//     if(counter > 5) {clearInterval(wynik)} else{console.log('welcome')}}, 1000);
// Zadanie 1.4. Napisz funkcję, która przyjmuje trzy argumenty: funkcję i dwie liczby. Funkcja będzie wywołała podaną w argumencie funkcję co x milisekund i 
// automatycznie zatrzyma się po upływie y milisekund. 

function funct(fun, x, y) {
    let res = setInterval(() => { fun() }, x);
    setTimeout(() => {clearInterval(res)}, y);
}
funct(welcome, 1000, 7000);

// Zadanie 1.5. 
/* Napisz funkcję:

//const poKolei = (fun1, fun2, cb) => { ... };                    
                        
taką, że:

    - jej dwoma pierwszymi argumentami są funkcje asynchroniczne â możesz założyć, że funkcje te muszą być przygotowane na przyjęcie określonej listy argumentów, z których korzystać będzie poKolei
    - funkcja poKolei powinna zapewnić, że fun2 wykona się zawsze po fun1, a wyniki wygenerowane przez fun1 zostaną przekazane do fun2.
    - trzecim argumentem jest âcallbackâ cb, czyli funkcja, ktĂłrej zadaniem jest przetworzenie wynikĂłw zwracanych przez fun2
*/


// Zadanie do przeÄwiczenia: 

// Zmodyfikuj rozwiÄzanie zadania 1.5, uĹźywajÄc mechanizmu async-await zamiast callbackĂłw.