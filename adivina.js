let numeros = [];
for (let index = 1; index <= 100; index++) {
    numeros.push(index);
}
console.log(numeros.length);

function boton() {
    let inicio = 0;
    let fin = numeros.length - 1;
    let terminar = false;

    while (!terminar) {
        let mitad = Math.floor((inicio + fin) / 2);
        let mensaje = confirm(`¿El número que pensaste es: ${numeros[mitad]}?`);
        
        if (mensaje) {
            alert(`Tu número es el ${numeros[mitad]}, ¡excelente decisión!`);
            numeros = [];
            for (let index = 1; index <= 100; index++) {
                numeros.push(index);
            }
            console.log(numeros.length);
            terminar = true;
        } else {
            let respuesta1 = confirm(`¿El número que pensaste es mayor?`);
            if (respuesta1) {
                inicio = mitad + 1;
                console.log(true);
            } else {
                fin = mitad - 1;
                console.log(false);
            }
        }
    } 
    
}
