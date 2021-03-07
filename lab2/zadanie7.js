function delet(arr) {
    for(let i = 0; i < arr.length; i++){
        switch(arr[i]) {
            case false:
                arr.splice(i, 1);
                break;
            case null:
                arr.splice(i, 1);
                break;
            case undefined:
                arr.splice(i, 1);
                break;
            case 0:
                arr.splice(i, 1);
                break;
            case "'":
                arr.splice(i, 1);
                break;
            case isNaN(arr[i]):
                arr.splice(i, 1);
                break;
            default:
                break;
        }
    }
    return arr
}

let a = [NaN, 1, "abc", "0", 32, false, undefined];
console.log(delet(a));
console.log(a)
console.log("'")

