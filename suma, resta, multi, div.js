function calcularOperaciones(num1, num2) {
    const suma = num1 + num2;
    const resta = num1 - num2;
    const multiplicacion = num1 * num2;
    let division;

    if (num2 !== 0) {
        division = num1 / num2;
    } else {
        division = "<span class='error'>No se puede dividir por cero.</span>";
    }

    return {
        numero1: num1,
        numero2: num2,
        suma: suma,
        resta: resta,
        multiplicacion: multiplicacion,
        division: division,
    };
}

function calcularYMostrar() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const resultados = calcularOperaciones(num1, num2);
    const resultadosDiv = document.getElementById('resultados');

    document.getElementById('resultadoNumero1').textContent = resultados.numero1;
    document.getElementById('resultadoNumero2').textContent = resultados.numero2;
    document.getElementById('resultadoSuma').textContent = resultados.suma;
    document.getElementById('resultadoResta').textContent = resultados.resta;
    document.getElementById('resultadoMultiplicacion').textContent = resultados.multiplicacion;
    document.getElementById('resultadoDivision').innerHTML = resultados.division; 

    resultadosDiv.style.display = 'block'; 
}