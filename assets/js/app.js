const NumeroUsuario = +prompt("Ingrese un número entero entre 1 y 20");
if (NumeroUsuario >= 1 && NumeroUsuario <= 20 && Number.isInteger(NumeroUsuario)) {
    console.log("Dato correcto!!");

    for (let i = 1; i <= NumeroUsuario; i++) {
        console.log(`${i} x ${NumeroUsuario} = ${i * NumeroUsuario}`)
    }

    for (let i = 1; i <= NumeroUsuario; i++) {
        let resultado = 1;
        for (let j = 1; j <= i; j++) {
            resultado *= j;
        }
        console.log(`Factorial de ${i} es: ${resultado}`)
    }
}
else {
    console.log("Número fuera de rango")
}

