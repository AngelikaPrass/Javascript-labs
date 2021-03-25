function func(tab, fun) {
    const r = tab.reduce((acc, curr) => {
        if(fun(curr)) acc = curr;
        return acc;
    }, undefined);

    return r;
}

let element = func(['Ala', 'Kot', 'Pies'], y => y === 'Ala');

console.log(element);


// 6. Napisz funkcję, która znajduje i zwraca konkretny element tablicy. Jeśli danego elementu nie ma w tablicy, zwraca undefined.

//     // Przykładowe działanie:
//     let element = func([ 'Ala', 'Kot', 'Pies' ],  y => y === 'Ala');  
                
//     console.log(element); // 'Ala' 
    