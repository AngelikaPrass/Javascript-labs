let x = (function(str) {
    const arr = str.split(" ");
    let longest = arr.sort(function(a, b){
        return b.length - a. length;
    });
    console.log(longest[0]);
})("Ala ma kota");