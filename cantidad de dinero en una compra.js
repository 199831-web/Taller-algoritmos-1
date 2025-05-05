function calcularFactura(valorCompra) {
    // Calcular el descuento
    const descuento = valorCompra * 0.10;
    const valorConDescuento = valorCompra - descuento;
  
    // Calcular el IVA (19%)
    const iva = valorConDescuento * 0.19;
  
    // Calcular el valor total de la factura
    const valorTotal = valorConDescuento + iva;
  
    // Devolver un objeto con los resultados
    return {
      valorCompra: valorCompra,
      descuento: descuento,
      valorConDescuento: valorConDescuento,
      iva: iva,
      valorTotal: valorTotal,
    };
  }
  
  // Ejemplo de uso:
  const valorDeLaCompra = 550000; // Cambia este valor por el de tu compra
  const resultado = calcularFactura(valorDeLaCompra);
  
  console.log("550000:", resultado.valorCompra);
  console.log("Descuento (10%):", resultado.descuento);
  console.log("Valor con descuento:", resultado.valorConDescuento);
  console.log("IVA (19%):", resultado.iva);
  console.log("Valor total de la factura:", resultado.valorTotal);