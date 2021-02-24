function isPositiveEven(number) {
    if (number > 0 && number % 2 == 0) {
        return "liczba jest parzysta i większa od zera";
    }
    else {
        return "liczba nie jest parzysta / większa od zera";
    }
}

console.log(isPositiveEven(5));
console.log(isPositiveEven(6));