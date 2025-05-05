function calcularDefinitiva(nota1, nota2, nota3) {
    const porcentaje1 = 0.20; 
    const porcentaje2 = 0.30; 
    const porcentaje3 = 0.50; 
  
    const porcentajeNota1 = nota1 * porcentaje1;
    const porcentajeNota2 = nota2 * porcentaje2; 
    const porcentajeNota3 = nota3 * porcentaje3;
  
    const definitivaPonderada = porcentajeNota1 + porcentajeNota2 + porcentajeNota3; 
  
    return definitivaPonderada;
  }
  
  const primeraNota = 4.5;
  const segundaNota = 5.0;
  const terceraNota = 3.2;
  
  const definitivaFinal = calcularDefinitiva(primeraNota, segundaNota, terceraNota);
  
  console.log("La definitiva de la asignatura es :", definitivaFinal);