'use strict'

//Przeanalizuj poniższe fragmenty kodu i zastanów się, co zostanie wypisane na ekranie.

// 1

const arr = ["Pies", "Kot", "Królik", "Papuga", "Małpa"];
const [pies, kot, krolik, papuga, malpa] = arr;

//console.log(pies, krolik);

// 2

const book1 = {
    title1: "Mistrz i Małgorzata",
    author1: "Michaił Bułhakow"
}

const {
    title1 = "-",
    author1 = "-",
    year1 = 1967,
} = book1;

// console.log(title1);
// console.log(author1);
// console.log(year1);

// 3

const book2 = {
    titleOfBook: "Mistrz i Małgorzata",
    authorOfBook: "Michaił Bułhakow",
    year2: 1967,
}

const {
    titleOfBook: title2 = "-",
    authorOfBook: author2 = "-",
    year2 = "-",
} = book2;

// console.log(title2);
// console.log(author2);
// console.log(year2);

// 4
const book3 = {
    title3: "Mistrz i Małgorzata",
    author3: "Michaił Bułhakow",
    year3: 1967
}

const { title3, ...bookWithoutTitle } = book3;

// console.log(title3);
// console.log(bookWithoutTitle);

// =======================
// Wykorzystując wszystkie informacje zawarte powyżej stwórz obiekt
// zawierający poniższe pola: 
// Country: USA
// Title: Zielona Mila
// Director: Frank Darabont 
// Year: 1999
// Genre: Dramat
// const movie1 = {
//     country: "USA",
//     title: "Zielona Mila",
//     director: "Frank Darabont",
//     year: 1999,
//     genre: "Dramat"
// }

// // Następnie wykorzystując zabieg przedstawiony w powyższych przykładach zmodyfikuj obiekt tak, aby po wyświetleniu obiektu dostać następujący output:
// const { country, year, genre, ...newMovie1 } = movie1
// console.log(newMovie1)
// Output: { title: 'Zielona Mila', director: 'Frank Darabont' }

// 5
// Stwórz teraz bardziej skomplikowany obiekt zawierający m.in tablicę i inny obiekt. Powiedzmy, że zawiera np. 
// Title: Nietykalni
// Directors: Olivier Nakache, Éric Toledano
// Country: Francja
// Year: 2011
// Actors: Philippe: François Cluzet, Dris: Omar Sy, Yvonne: Anne Le Ny, ...
const movie2 = {
    title: "Nietykalni",
    directors: ["Oliver Nakache", "Éric Toledano"],
    country: "Francja",
    year: 2011,
    actors: {
        Philippe: "François Cluzet",
        Dris: "Omar Sy",
        Yvonne: "Anne Le Ny"
    }
}


//Następnie odwzoruj wygląd stworzonej struktury obiektu i wykonaj na nim poniższe operacje 
const {
    title: title = "-", 
    directors: [director1, director2],
    country: country = "-",
    year: year = "-",
    actors: {Philippe: PhilippeRole, Dris: DrisRole, Yvonne: YvonneRole}
} = movie2

console.log(title); // Nietykalni
console.log(director1); // Olivier Nakache
console.log(DrisRole); // Omar Sy

//Zmodyfikuj teraz swój kod, aby zawierał domyślne wartości, jeśli którakolwiek z własności filmu nie została podana.