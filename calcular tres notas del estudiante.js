function calcularDefinitiva(nota1, nota2, nota3) {
    const sumaNotas = nota1 + nota2 + nota3;
    const definitiva = sumaNotas / 3; 
  
    return definitiva;
  }
  
  const primeraNota = 4.5; 
  const segundaNota = 5.0; 
  const terceraNota = 3.2; 
  
  const definitivaFinal = calcularDefinitiva(primeraNota, segundaNota, terceraNota);
  
  console.log("La definitiva de la asignatura es:", definitivaFinal); 