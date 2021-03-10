function f2(a) {
    let str = ""
    for(let i = 0; i <= a; i++) {
        str += i;
        str += " ";
    }
    return str;
}
console.log(f2(4));
console.log(f2(17));