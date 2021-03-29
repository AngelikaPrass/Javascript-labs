const { CLIEngine } = require("eslint");

const listaZakupow = [{
    produkt: "chleb",
    typ: "pieczywo",
    ilosc: 2,
    cena: 3.6,
    jednostka: "sztuk"
},
{
    produkt: "jabłka",
    typ: "owoce",
    ilosc: 6,
    cena: 2.5,
    jednostka: "kg"
},
{
    produkt: "mleko",
    typ: "nabiał",
    ilosc: 3,
    cena: 2.9,
    jednostka: "litry"
},
{
    produkt: "kawa",
    typ: "napoje",
    ilosc: 1,
    cena: 24,
    jednostka: "sztuk"
},
{
    produkt: "kefir",
    typ: "nabiał",
    ilosc: 2,
    cena: 2.4,
    jednostka: "sztuk"
},
{
    produkt: "woda",
    typ: "napoje",
    ilosc: 6,
    cena: 1.9,
    jednostka: "sztuk"
},
{
    produkt: "marchewka",
    typ: "warzywa",
    ilosc: 2,
    cena: 4,
    jednostka: "kg"
},
{
    produkt: "banan",
    typ: "owoce",
    ilosc: 1,
    cena: 4.6,
    jednostka: "kg"
},
{
    produkt: "herbata",
    typ: "napoje",
    ilosc: 2,
    cena: 8,
    jednostka: "sztuk"
},
{
    produkt: "ziemniaki",
    typ: "warzywa",
    ilosc: 5,
    cena: 3.5,
    jednostka: "kg"
},
{
    produkt: "jogurt",
    typ: "nabiał",
    ilosc: 8,
    cena: 1.4,
    jednostka: "sztuk"
}
];

// zadanie 1
console.log(" ");
console.log("Zadanie 1");
console.log(" ");

const Arr1 = listaZakupow.reduce(function(prev, curr){
    prev[curr.produkt] = {...curr};
    return prev;
}, {})
console.log(Arr1);
// zadanie 2
console.log(" ");
console.log("Zadanie 2")
console.log(" ");

const suma = listaZakupow.reduce(function(prev, curr){
    if(curr.typ === "nabiał") {
        return prev + curr.cena * curr.ilosc;
    }
    return prev;
}, 0)
console.log(suma);
// zadanie 3 
console.log(" ");
console.log("Zadanie 3");
console.log(" ");

const kilogramy = listaZakupow.reduce(function(prev, curr) {
    if(curr.jednostka === "kg") {
    prev.push(curr.produkt);
    }
    return prev.sort();
}, [])

console.log(kilogramy);

// zadanie 4 
console.log(" ");
console.log("Zadanie 4");
console.log(" ");

function type(arr, param) {
    const r = arr.reduce((acc, curr) => {
        if (curr.typ === param && (curr.cena*curr.ilosc) < 10) {
            acc.push(curr);
        }
        return acc;
    }, [])
    r.sort((a, b) => a.cena*a.ilosc - b.cena*b.ilosc);
    let returningArray = r.map(function(obj) {
        return obj.produkt + " : " + obj.cena*obj.ilosc;
    })
    return returningArray;
}

console.log(type(listaZakupow, "nabiał"));
console.log(" ");
console.log("Zadanie 5");
console.log(" ");

// Zadanie 5 
const naSztuki = listaZakupow.reduce((acc, curr) => {
    if (curr.jednostka === "sztuk") {
        acc.push(curr.produkt);
    }
    return acc;
}, [])
console.log(naSztuki);
console.log(" ");
console.log("Zadanie 6");
console.log(" ");

// Zadanie 6
function group(array, property) {
    return array.reduce(function(acc, curr) {
        let key = curr[property];
        if(!acc[key]) {
            acc[key] = [];
        }
        if (curr.jednostka === "sztuk")
        acc[key].push(curr.produkt + " - sztuk: " + curr.ilosc);
        if (curr.jednostka === "litry")
        acc[key].push(curr.produkt + " - litry: " + curr.ilosc);
        if (curr.jednostka === "kg")
        acc[key].push(curr.produkt + " - kg: " + curr.ilosc);
        return acc;
    }, [])
}

let arr = listaZakupow.sort((a, b) => a.typ > b.typ ? 1 : -1);
// let arr1 = arr.sort((a, b) => a.produkt > b.produkt ? 1 : -1);
let groupedArray = group(arr, "typ");
console.log(groupedArray);

