function greetPerson(name) {
    name = name.charAt(0).toUpperCase() +name.slice(1)
    if (typeof name !== 'string') {
        return"En este caso el parámetro debe ser un nombre"
    }

    if (name.length <2) {
        return "El nombre debe de constar de por lo menos 2 letras"
    }

    if (/[^a-zA-Z\s]/.test(name)) {
        return "El nombre no puede contener caracteres especiales ni números.";
    } else
    
    return "Hola " +name+ ", bienvenido a mi programa."



    
} const result = greetPerson("Daniel")

