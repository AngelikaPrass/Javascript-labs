const array = [1, 21, -3, -7, 11];
const newArray = array.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
        const pwd = currentValue ** 2;
        accumulator.push(pwd);
    }
    return accumulator;
}, []);

console.log(newArray);