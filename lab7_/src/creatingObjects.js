//  1. Zdefiniuj pola 'title' i 'author' i funkcjÄ print(), ktĂłra wypisuje author - title

const book0 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    print: function(){
        console.log(this.author + " - " + this.title)
    }
    };
    
book0.print();

const book = {};
//properties
 book.title = "Igrzyska Śmierci";
 book.author = "S. Collins";
 book.print = function() {console.log(this.author + " - " + this.title)};
 console.log(book);
 book.print();

const book2 = Object.create(book0);
book2.title = "Niezgodna";
book2.author = "V. Roth";
console.log(book2);
book2.print();

// function BookCreator(title, author) {
//     const b = {};
//     b.title = title;
//     b.author = author;
//     b.print = function() {console.log(this.author + " - " + this.title)};
//     return b;
// }
// const book3 = BookCreator('Cień wiatru', 'Carlos Ruiz Zafon');
// const book4 = BookCreator('Ojciech Chrzestny', 'Mario Puzo');
// book3.print();
// book4.print();
    
// 2. Przetestuj poniĹźszy kod i odpowiedz na pytania
    
    function testThis() {
        console.log(this);
    }
    
    testThis();
    
    function testThis2() {
        "use strict"
        console.log(this);
    }
    
    testThis2();
    
    
    // // 2.1. Czym jest this? 
    // // 2.2. Do czego odwoĹuje siÄ this w obu przypadkach  1 - global object, 2 - obiekt w funkcji, w tym przypadku undefined
    
    const person = {
        name: 'Oscar Wilde',
        print() {
            console.log(this.name);
    
            function a(self) {
                
                console.log("a: " + self.name);
            }
            a(this);
        }
    }
    person.print();
    
    // // 2.3. Jakie wartoĹci przyjmuje this w powyĹźszych przypadkach i dlaczego? autor, undefined, ponieważ jest wywoływana w inne sposoby 
    // // 2.4. Zmodyfikuj powyĹźszy kod w ten sposĂłb, aby funkcja a wyĹwietlaĹa w konsoli 'a: Oscar Wilde'. Nie uĹźywaj arrow function.
    
    const printName = function() {
        console.log(this.name);
    }
    
    const person1 = {
        name: 'Aaron Towels' 
    }
    
    const person2 = {
        name: 'Tom Clancy' 
    }
    printName.apply(person1);
    printName.apply(person2);

    // // 2.5. Za pomocÄ funkcji printName wypisz 'name' obu autorĂłw. Nie zmieniaj implementacji funkcji printName!
    
    
    const person3 = {
        name: 'Arthur Conan Doyle',
        print() {
            const a = () => {
                console.log(this);
            };
            a();
        }
    }
    person3.print();

    // 2.6. Co wydrukuje w konsoli powyĹźszy kod? Jaki scope ma arrow function? { name: 'Arthur Conan Doyle', print: [Function: print] }, lokalny
    
    // 3. owrĂłÄmy do zadania 1. 
    // Dlaczego nasza funkcja BookCreator nie jest najlepszym rozwiÄzaniem do tworzenia obiektĂłw?
    
    // Zmodyfikuj funkcjÄ BookCreator tak, aby inicjalizowaĹa pola author i title. 
    // FunkcjÄ print zadeklaruj jako wspĂłlnÄ dla wszystkich obiektĂłw tworzonych przez BookCreator.
    // Dopisz do tworzonych obiektĂłw pole readers, ktĂłre bÄdzie zawieraĹo liczbÄ czytelnikĂłw.
    // Zadeklaruj funkcjÄ addReader, ktĂłra inkrementuje pole readers. addReader powinna byÄ funkcjÄ wspĂłlnÄ, tak jak print.
    function BookCreator(title, author) {
        this.title = title;
        this.author = author;
        this.readers = 0;
    };
    BookCreator.prototype.print = function() {console.log(this.author + " - " + this.title)};
    BookCreator.prototype.addReader = function() { this.readers++; };
    const book5 = new BookCreator('Cień wiatru', 'Carlos Ruiz Zafon');
    const book6 = new BookCreator('Ojciech Chrzestny', 'Mario Puzo');
    console.log(book5.hasOwnProperty('isBestseller'));
    // 4. Na stworzonym obiekcie wywoĹaj funkcjÄ hasOwnProperty('isBestseller'). 
    // Napisz dlaczego nasz obiekt ma do niej dostÄp. (jeĹli wyskakuje bĹÄd - powrĂłÄ do poprzedniego zadania lub spytaj prowadzÄcego)
    //ponieważ jest prototypem, a ta funkcja istnieje dla prototypów.
    
    
    // 5. OdwoĹaj siÄ do zmiennej __proto__ w stworzonym obiekcie, co zawiera ta zmienna i do czego sĹuĹźy?
    console.log(book6.__proto__);
    // pokazuje jakie są funkcje w tym prototypie.