function delet(arr) {
    let arr1 = arr.filter(Boolean);
    return arr1;
}

let a = [NaN, 1, "abc", "0", 32, false, undefined];
console.log(delet(a));
