function calculateFactorial(number) {
    if (typeof number === "number" && number % 1 !==0) {
        return "El número tiene que ser entero" 
    } else if (number <0 ) {
        return"El número debe de ser un entero positivo"
    } else 


    do {
        number * (number-1)
        number --
    } while (number -1 >= 1);


} const result = calculateFactorial(5)
console.log(result);