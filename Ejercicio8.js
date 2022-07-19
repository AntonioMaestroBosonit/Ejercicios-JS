// Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
// La función debe tener 2 parámetros:
// Primer parámetro debe ser el número de bytes
// Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado
// (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

// Ejemplo de uso de la función:
// const result = fromBytesToFormattedSizeUnits(1000);
// console.log(result); // 1KB

// const result = fromBytesToFormattedSizeUnits(123456789);
// console.log(result); // 123MB

// const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
// console.log(result); // -12.145GB

const fromBytesToFormattedSizeUnits = (num, q = 3) => {
  let result = num.toPrecision(q);

  //Se divide en el resultado para quitar la notación científica.
  if (Math.abs(num) < Math.pow(10, 3)) {
    result = result / Math.pow(10, 0) + "B";
  } else if (Math.abs(num) < Math.pow(10, 6)) {
    result = result / Math.pow(10, 3) + "KB";
  } else if (Math.abs(num) < Math.pow(10, 9)) {
    result = result / Math.pow(10, 6) + "MB";
  } else if (Math.abs(num) < Math.pow(10, 12)) {
    result = result / Math.pow(10, 9) + "GB";
  } else if (Math.abs(num) < Math.pow(10, 15)) {
    result = result / Math.pow(10, 12) + "TB";
  } else if (Math.abs(num) < Math.pow(10, 18)) {
    result = result / Math.pow(10, 15) + "PB";
  } else if (Math.abs(num) < Math.pow(10, 21)) {
    result = result / Math.pow(10, 18) + "EB";
  } else if (Math.abs(num) < Math.pow(10, 24)) {
    result = result / Math.pow(10, 21) + "ZB";
  } else {
    result += "YB";
  }

  return result;
};

console.log(fromBytesToFormattedSizeUnits(123456789));
console.log(fromBytesToFormattedSizeUnits(-12145489451.5932, 5));
console.log(fromBytesToFormattedSizeUnits(1000, 3));
