function f(arr) {
    let x = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++){
            x.push(arr[i][j]);
        }
    }
    return x
}

let a = [ [1,2,3], [4,5,6] ];
console.log(f(a));