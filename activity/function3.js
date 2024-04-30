function differentDivision(dividend,divisor) {
    let numberOfDivisions = 0
    
    while (dividend >=divisor) {
        dividend -= divisor

        numberOfDivisions++  
    }
    if (dividend > 0) {
        return ("el resultado es "+numberOfDivisions+ " y sobra " +(dividend ));
    } else {
        return "el resultado es " +numberOfDivisions;
    }
    
   

} const result = differentDivision(12,5);



