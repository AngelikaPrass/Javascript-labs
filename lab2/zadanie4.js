function superfunct(arr, a, b, c) {
    for (let i = 0; i < arr.length; i++) arr[i] -= a;
    if (!(b === undefined)) for (let i = 0; i < arr.length; i++) arr[i] -= b;
    if (!(c === undefined)) for (let i = 0; i < arr.length; i++) arr[i] -= c;
    return arr;
}
