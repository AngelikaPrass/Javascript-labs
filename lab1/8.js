let arr = ["js", "react", "js", "angular", "angular", "js"];

function count(arg) {
    let a = [];
    let b = [];
    let prev;
    arg.sort();
    for (i = 0; i < arg.length; i++ ) {
        if (arg[i] != prev) {
            a.push(arg[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = arr[i]
    }
    return [a,b];
}

let x = (count(arr));
let obj = {};
for(i = 0; i < x[0].length; i++) {
    obj[x[0][i]] = x[1][i];
}

console.log(obj);