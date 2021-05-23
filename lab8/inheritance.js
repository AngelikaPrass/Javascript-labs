'use strict';
// 1.1 
// Co wyĹwietlÄ na ekranie poniĹźsze wywoĹania?

const book = {
    title: "Potop",
    author: "Henryk Sienkiewicz"
}

// console.log(book.__proto__ === Object.prototype); //true
// console.log(book.__proto__.__proto__ === null); //true

// 1.2. 
// ZastanĂłw siÄ, co naleĹźy wpisaÄ w miejsce ..., tak aby kaĹźde wywoĹanie po odkomentowaniu zwrĂłciĹo true.

const animals = ["dog", "cat", "rabbit", "hamster"];

// console.log(animals.__proto__ === Array.prototype);
//  console.log(animals.__proto__.__proto__ ===Object.prototype);
//  console.log(animals.__proto__.__proto__.__proto__ ===null);

// 1.3. 
// Co zostanie wyĹwietlone na ekranie w poniĹźszym przykĹadzie? WyjaĹnij dlaczego.

function Animal(animal) {
    this.animal = animal;
}

var dog = new Animal('dog');
var cat = new Animal('cat');
dog.whatIs = function () {
    console.log("It's a " + this.animal);
}

// console.log(dog.__proto__ === Animal.prototype);//true
// console.log(dog.__proto__ === cat.__proto__); // true

// 1.4.
// StwĂłrz obiekt za pomocÄ funkcji CreateMovie (zawierajÄcy klucze bez wartoĹci: director, title, year) wykorzystujÄc sĹĂłwko `this`.
// JeĹli przy tworzeniu obiektu rok nie zostanie podany powinien przyjmowaÄ wartoĹÄ "unknown".
function CreateMovie(director, title, year="unknown") {
    this.director = director;
    this.title=title;
    this.year = year;
}

const film=new CreateMovie("tworca","tytul",1234);

// NastÄpnie nie zmieniajÄc implementacji funkcji CreateMovie, dodaj do niego metody: 
// * isOlder(year) - zwracajÄcÄ true/false w zaleĹźnoĹci od tego, czy podany film jest mĹodszy/starszy niÄ rok 2000.
// * print - wyĹwietlajÄcÄ: "director: title (year)"

CreateMovie.prototype.isOlder = function(year){return this.year < 2000 ? true : false}
CreateMovie.prototype.print=function(){console.log(this.director+": "+this.title+" ("+this.year+")")}

console.log(film.isOlder());
film.print()
// 1.5.
// UzupeĹnij poniĹźszy konstruktor o inicjalizacjÄ name, type i funkcjÄ printInstrument. Funkcja printInstrument powinna byÄ wspĂłĹdzielona miÄdzy wszystkie utworzone obiekty.

function CreateInstrument(name, type) {
   const instrument = Object.create(Instrument.prototype);
   instrument.name=name;
   instrument.type=type;


   return instrument;
}

// 1.6. 
// UzupeĹnij poniĹźszy konstruktor, ktĂłry tworzy obiekt dziedziczÄcy po Instrument. Wykorzystaj do jego stworzenia konstruktor z zadania poprzedniego.
// Zdefiniuj funkcjÄ setStrings(number), ktĂłra ustala liczbÄ strun w instrumencie (ta funkcja teĹź powinna byÄ wspĂłĹdzielona). NewStringInstrument powinien mieÄ teĹź dostÄp do funkcji, ktĂłra znajduje siÄ w Instrument.
// PodpowiedĹş: aby zmieniÄ wartoĹÄ zmiennej __proto__ naleĹźy uĹźyÄ - Object.setPrototypeOf(object, prototype) - naleĹźy uĹźyÄ tej funkcji dwa razy w tym rozwiÄzaniu. 

// function CreateStringedInstrument(name, type, stringsCount) {
//     const newStringedInstrument = ...

//     return newStringedInstrument;
// }


// const stringedInstrument = CreateStringedInstrument('gitara', 'strunowy', '3');
// stringedInstrument.printInstrument();
// stringedInstrument.setStrings(3);


// 1.7. 
// Przeanalizuj poniĹźszy kod i odpowiedz na umieszczone w nim pytania.

function Instrument(name, type) {
    this.name = name;
    this.type = type;
}

Instrument.prototype.printInstrument = function () {
    console.log("Instrument: " + name + ", typ: " + type);
}
function StringedInstrument(stringsCount, name, type) {
    Instrument.call(this, name, type);
    this.stringsCount = stringsCount;
}

StringedInstrument.prototype = Object.create(Instrument.prototype);

// a) StwĂłrz instancjÄ StringedInstrument.

// b) W jaki sposĂłb odwoĹaÄ siÄ do metod printInstrument i printStringedInstrument?

// c) ZastÄp wywoĹanie call() funkcjÄ apply() 

// 1.8.
// UtwĂłrz obiekt Animal z polem 'name' i funkcjÄ printName, po ktĂłrym bÄdÄ dziedziczyĹy Mammal (z polem age i funkcjÄ getAge) i Fish (z polem weight i funkcjÄ increaseWeight()) . 
// NastÄpnie stwĂłrz kolejne obiekty - Dog (z polem breed i nadpisaniem funkcji getAge(), ktĂłra tutaj bÄdzie najpierw wywoĹywaĹa funkcjÄ getAge() z klasy dziedziczonej, a nastÄpnie mnoĹźyĹa wynik razy 4 i wyĹwietlaĹa go) i Salmon (z funkcjÄ catch()), ktĂłre bÄdÄ dziedziczyĹy odpowiednio po Mammal i Fish.
// W razie problemĂłw wzoruj siÄ na rozwiÄzaniu z poprzedniego zadania.
'use strict';
// 1.1 
// Co wyĹwietlÄ na ekranie poniĹźsze wywoĹania?

const book = {
    title: "Potop",
    author: "Henryk Sienkiewicz"
}

// console.log(book.__proto__ === Object.prototype); //true
// console.log(book.__proto__.__proto__ === null); //true

// 1.2. 
// ZastanĂłw siÄ, co naleĹźy wpisaÄ w miejsce ..., tak aby kaĹźde wywoĹanie po odkomentowaniu zwrĂłciĹo true.

const animals = ["dog", "cat", "rabbit", "hamster"];

// console.log(animals.__proto__ === Array.prototype);
//  console.log(animals.__proto__.__proto__ ===Object.prototype);
//  console.log(animals.__proto__.__proto__.__proto__ ===null);

// 1.3. 
// Co zostanie wyĹwietlone na ekranie w poniĹźszym przykĹadzie? WyjaĹnij dlaczego.

// function Animal(animal) {
//     this.animal = animal;
// }

// var dog = new Animal('dog');
// var cat = new Animal('cat');
// dog.whatIs = function () {
//     console.log("It's a " + this.animal);
// }

// console.log(dog.__proto__ === Animal.prototype);//true
// console.log(dog.__proto__ === cat.__proto__); // true

// 1.4.
// StwĂłrz obiekt za pomocÄ funkcji CreateMovie (zawierajÄcy klucze bez wartoĹci: director, title, year) wykorzystujÄc sĹĂłwko `this`.
// JeĹli przy tworzeniu obiektu rok nie zostanie podany powinien przyjmowaÄ wartoĹÄ "unknown".
function CreateMovie(director, title, year="unknown") {
    this.director = director;
    this.title=title;
    this.year = year;
}

const film=new CreateMovie("tworca","tytul",1234);

// NastÄpnie nie zmieniajÄc implementacji funkcji CreateMovie, dodaj do niego metody: 
// * isOlder(year) - zwracajÄcÄ true/false w zaleĹźnoĹci od tego, czy podany film jest mĹodszy/starszy niÄ rok 2000.
// * print - wyĹwietlajÄcÄ: "director: title (year)"

CreateMovie.prototype.isOlder = function(year){return this.year < 2000 ? true : false}
CreateMovie.prototype.print=function(){console.log(this.director+": "+this.title+" ("+this.year+")")}

// console.log(film.isOlder());
// film.print()
// 1.5.
// UzupeĹnij poniĹźszy konstruktor o inicjalizacjÄ name, type i funkcjÄ printInstrument. Funkcja printInstrument powinna byÄ wspĂłĹdzielona miÄdzy wszystkie utworzone obiekty.

function CreateInstrument(name, type) {
   const instrument = Object.create(Instrument.prototype);
   instrument.name=name;
   instrument.type=type;
   return instrument;
};

// 1.6. 
// UzupeĹnij poniĹźszy konstruktor, ktĂłry tworzy obiekt dziedziczÄcy po Instrument. Wykorzystaj do jego stworzenia konstruktor z zadania poprzedniego.
// Zdefiniuj funkcjÄ setStrings(number), ktĂłra ustala liczbÄ strun w instrumencie (ta funkcja teĹź powinna byÄ wspĂłĹdzielona). NewStringInstrument powinien mieÄ teĹź dostÄp do funkcji, ktĂłra znajduje siÄ w Instrument.
// PodpowiedĹş: aby zmieniÄ wartoĹÄ zmiennej __proto__ naleĹźy uĹźyÄ - Object.setPrototypeOf(object, prototype) - naleĹźy uĹźyÄ tej funkcji dwa razy w tym rozwiÄzaniu. 

// function CreateStringedInstrument(name, type, stringsCount) {
//     const newStringedInstrument = ...;

//     return newStringedInstrument;
// }


// const stringedInstrument = CreateStringedInstrument('gitara', 'strunowy', '3');
// stringedInstrument.printInstrument();
// stringedInstrument.setStrings(3);


// 1.7. 
// Przeanalizuj poniĹźszy kod i odpowiedz na umieszczone w nim pytania.

function Instrument(name, type) {
    this.name = name;
    this.type = type;
}

Instrument.prototype.printInstrument = function () {
    console.log("Instrument: " + name + ", typ: " + type);
}
function StringedInstrument(stringsCount, name, type) {
    Instrument.call(this, name, type);
    this.stringsCount = stringsCount;
}

StringedInstrument.prototype = Object.create(Instrument.prototype);

// a) StwĂłrz instancjÄ StringedInstrument.

// b) W jaki sposĂłb odwoĹaÄ siÄ do metod printInstrument i printStringedInstrument?

// c) ZastÄp wywoĹanie call() funkcjÄ apply() 

// 1.8.
// UtwĂłrz obiekt Animal z polem 'name' i funkcjÄ printName,
// po ktĂłrym bÄdÄ dziedziczyĹy Mammal (z polem age i funkcjÄ getAge)
// i Fish (z polem weight i funkcjÄ increaseWeight()) . 
// NastÄpnie stwĂłrz kolejne obiekty - Dog (z polem breed i nadpisaniem funkcji getAge(),
// ktĂłra tutaj bÄdzie najpierw wywoĹywaĹa funkcjÄ getAge() z klasy dziedziczonej,
// a nastÄpnie mnoĹźyĹa wynik razy 4 i wyĹwietlaĹa go) i Salmon (z funkcjÄ catch()),
// ktĂłre bÄdÄ dziedziczyĹy odpowiednio po Mammal i Fish.
// W razie problemĂłw wzoruj siÄ na rozwiÄzaniu z poprzedniego zadania.

function Animal(name) {
	this.name=name;

};

Animal.prototype.printName=function() {
	console.log("nazwa zwierzęcia to "+this.name);
};

function Mammal(name, age) {
	Animal.call(this, name);
	this.age=age;
}

Mammal.prototype=Object.create(Animal.prototype);
Mammal.prototype.getAge=function() {return this.age;};

let ssak=new Mammal("tak", 22);
console.log(ssak);
console.log(ssak.getAge());
ssak.printName();

function Fish(name, weight){
    Animal.call(this, name);
    this.weight=weight;
}

Fish.prototype=Object.create(Animal.prototype);
Fish.prototype.increaseWeight=function(){
    this.weight++;
};
const rybka=new Fish("nemo",2);
rybka.increaseWeight();
console.log(rybka);

function Dog(name, age, breed) {
	Mammal.call(this, name,age);
	this.breed=breed;
}
Dog.prototype=Object.create(Mammal.prototype);
Dog.prototype.getAge=function() {
	return (Mammal.prototype.getAge.call(this)* 4);
    

}
function Salmon(name,weight) {
	Fish.call(this,name,weight);
}
Salmon.prototype=Object.create(Fish.prototype)
const losos=new Salmon("szczęśliwa rybka",3);
const fafik =  new Dog("Fafik", 10, "Owczarek");
console.log(fafik.getAge());
 losos.increaseWeight();
 losos.increaseWeight();
 losos.increaseWeight();
 console.log(losos);