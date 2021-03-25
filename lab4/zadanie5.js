const wishlist = [   
    {  
        name: 'Czajnik',  
        netto: 100  
    },  
    {  
        name: 'Lodówka',  
        netto: 1300  
    },  
    {  
        name: 'Mikrofalówka',  
        netto: 340  
    },  
    {  
        name: 'Mikser',  
        netto: 120  
    },  
    {  
        name: 'Piekarnik',  
        netto: 2100  
    }  
]

// p1

const cena = wishlist.reduce((acc, curr) => {
    return acc += curr.netto * 1.23;
}, 0);

console.log(cena);

// p2

const lista_cen = wishlist.reduce((acc, curr) => {
    return acc = [...acc, curr.netto];
}, []);

console.log(lista_cen);

// p3

function func(tab, funkcja) {
    const r = tab.reduce((acc, curr) => {
        return acc = [...acc, funkcja(curr)];
    }, []);
    return r;
}
const newArray = func(wishlist, x  => x.name + ' : ' + x.netto);
console.log(newArray);

//p4
const anotherArray = wishlist.map( x  => x.name + ' : ' + x.netto);
console.log(anotherArray);

//p5
function fff(tab, funkcja) {
    const r = tab.reduce((acc, curr) => { 
        if (funkcja(curr)) acc = [...acc, curr];
        return acc; 
    }, []);
    return r;
}

const newerArray = fff(wishlist, x => x.netto < 500)
console.log(newerArray); 
