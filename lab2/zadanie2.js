//function toArray (param1, param2) {
//    let a = new Array(param1, param2);
//    return a;
//}
//console.log(toArray("niebieski", "zielony"));

function toArray (param1) {
    let arr = [...param1];
    return arr;
}
console.log(toArray(['kot', 'pies', 'rybka']));