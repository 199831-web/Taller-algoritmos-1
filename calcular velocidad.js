function calcularVelocidad(distanciaKilometros, tiempoHoras) {
    if (tiempoHoras === 0) {
      return "El tiempo no puede ser cero.";
    }
    const velocidadKilometrosPorHora = distanciaKilometros / tiempoHoras;
    return velocidadKilometrosPorHora;
  }
  
  const distancia = 10; 
  const tiempo = 1; 
  
  const velocidadDelAuto = calcularVelocidad(distancia, tiempo);
  
  console.log("La velocidad del auto es:", velocidadDelAuto, "km/h");
  
  const otraDistancia = 200;
  const otroTiempo = 4.5;
  const otraVelocidad = calcularVelocidad(otraDistancia, otroTiempo);
  console.log("Otra velocidad del auto es:", otraVelocidad, "km/h");