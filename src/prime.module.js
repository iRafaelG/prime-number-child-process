process.on("message", data => {
    let response = esPrimo(data.numero);
    response.pid = process.pid;
    process.send(response);
    process.exit();
});

function esPrimo(numero) {
    let startTime = new Date();
    let endTime = new Date();
    let primo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            endTime = new Date();
            primo = false;
            break;
        }
    }

    if (primo) endTime = new Date();

    return {
        numero,
        primo,
        time: "Tiempo total de ejecución: " + (endTime.getTime() - startTime.getTime()) + " ms"
    }

}