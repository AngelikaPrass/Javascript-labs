const numbers = [4, 10, 32, 1, 54, 43, 21, 43, 65, -43, 5];

for(i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log("Najmniejszy element: ");
console.log(Math.min(...numbers));
console.log("Największy element: ");
console.log(Math.max(...numbers));