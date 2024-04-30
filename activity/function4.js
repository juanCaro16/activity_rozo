function validateLeapYear(year) {

    if (year % 100 === 0 && year % 400 === 0 || year % 4 ===0) {
        return "El año " +year+ " es bisiesto"
    } else return "El año " +year+ " No es bisiesto"

} const result = validateLeapYear(2005)
    console.log(result);
