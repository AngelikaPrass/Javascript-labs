function f1(a,b,c) {
    let arr = [a, b, c];
    let res = Math.max(a,b,c);
    const index = arr.indexOf(res);
    arr.splice(index, 1);

    if (res < arr[0] + arr[1]) {
        return true;
    }
    else {
        return false;
    }
}

console.log(f1(3,4,5))
console.log(f1(11,11,11))
console.log(f1(1,1,3))