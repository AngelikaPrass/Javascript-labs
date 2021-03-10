function funct1(x) {
    num = 2
    function funct2(a) {
        return a + num
    }
    return funct2(x)
}
console.log(funct1(1))