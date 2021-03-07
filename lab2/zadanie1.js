'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co zwróci funkcja poniższa funkcja w każdym z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val_1, val_2) {
    (val_1 == val_2) ? console.log('A') : console.log('B');
    (val_1 === val_2) ? console.log('C') : console.log('D');
}

isEquals(2, '2'); // A, D ponieważ wartość jest ta sama, ale typ inny
isEquals(null, undefined); // A, D 
isEquals(undefined, NaN); //B, D 
isEquals(['a', 'b', 'c'], ['b', 'c', 'd']); // B, D nie zgadzają się wartości, obie wartości to obiekty więc nie są sobie równe typem (obiekty nigdy nie są sobie równe, chyba że obie zmienne wskazują na ten sam obiekt - w tym przypadku musielibyśmy porównać var1=lista i var2=lista aby wyszło true)
isEquals(0, ''); // A, D wartość jest ta sama 0 == pusty string, ale to inne typy
isEquals('0', ''); // B, D tu obydwa są tekstem, jednak pierwsza wartość nie jest pusta a druga tak
isEquals(+0, -0); // A, C zero to zero :)
isEquals(0, false); // A, D ta sama wartość, inny typ
isEquals(0, 'false'); // B, D 
isEquals([1, 2], '1,2'); // A, D ta sama wartość, inny typ

console.log(!!false);
console.log(!!true);
console.log(!!undefined);
console.log(!!null);

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

console.log(person);
// person = {}; - powoduje błąd TypeError, ponieważ person jest typu const i nie można zmienić wartości
console.log(person);

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

let number = 3;
console.log(number); {
    let number = 4;
    console.log(number);
}
console.log(number);
// 3 4 3, ponieważ zmienna number równa 4 jest zmienną o mniejszym zakresie (tylko w nawiasach {})
// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'? 
// Operator spread pozwala na interpretację wyrażenia w miejscach, gdzie oczekuje się wielu argumentów (dla wywołań funkcji) lub wielu elementów (dla literałów tablicowych).

const arr = [1, 2];
const newArr1 = [arr, 3, 4];
console.log(newArr1); // powstanie 3-elementowa tablica, w której elementy to tablica [1,2] oraz 3 i 4. [ [1,2], 3, 4]
const newArr2 = [...arr, 3, 4];
console.log(newArr2); // powstanie tablica, w której są 4 elementy - [1, 2, 3, 4], czyli po prostu przekazano "zawartość" listy arr

// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

const word = 'react';
const arrWord = [...word];
console.log(arrWord);
// ['r', 'e', 'a', 'c', 't']
//przez operator spread zmieniliśmy typ zmiennej word i "zrobiliśmy" z niej tablicę
// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

var hello = 'Hello world!';
var result = hello / 2;

console.log(result); // NaN

console.log(Number.isNaN(result)); // true
console.log(Number.isNaN(hello)); // false

// nie możemy podzielić zmiennej typu string przez liczbę, ponieważ nie jest liczbą, więc wynik dzielenia również nie jest liczbą.

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?
// var można nadpisać (zdefiniować jeszcze raz), let nie, ale można później zmienić jego wartość, const jest stałą której wartości nie da się zmienić ani zredefiniować.

var car = 'BMW';

function showCar() {
    car = 'Audi';
    //model = 'A5'; //reference error - model is not defined
    console.log('Great car!');
}

showCar();

console.log(car);
//console.log(model);
//reference error - model is not defined
//-------

 var name = 'Bryan';

(function differentName() {
    var name = 'Adam';
    console.log(name);
})();

console.log(name);
// Adam Bryan
//-------

if (true) {
    var a = 2;
}
console.log(a);

if (true) {
    const b = 2;
}
//console.log(b); 
// reference error - b is not defined - zmienna lokalna działająca tylko w zakresie nawiasów klamrowych

//-------

for (var i = 0; i < 10; i++) {
    console.log(i);
} // od 0 do 9
console.log(i); //10

for (let i = 0; i < 10; i++) {
    console.log(i);
} // od 0 do 9
console.log(i); //10

//-------

var test = "var1";
var test = "var2";

let test2 = "let1";
let test2 = "let2"; // syntax error - już istnieje obiekt 'test2'

// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?
// powoduje użycie strict mode, w którym nie można korzystać z niezadeklarowanych wcześniej zmiennych.