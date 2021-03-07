let var1 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
function f1 (arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log("rząd " + i);
        for(let j = 0; j < arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}

f1(var1);