// Código del Cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

//Código del Triángulos
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function alturaTraingulo(ladoGrande1, ladoGrande2, baseGrande) {
  if (ladoGrande1 != ladoGrande2) {
    alert("Recuerda que el Triángulo Isóceles tiene los 2 lados iguales.");
  } else {
    const ladoPequeno2 = baseGrande / 2;
    const basePequeno = ladoGrande1;

    const ladoPequeno2Cuadrado = ladoPequeno2 * ladoPequeno2;
    const basePequenoCuadrado = basePequeno * basePequeno;

    let ladoPequeno1 = Math.sqrt(basePequenoCuadrado - ladoPequeno2Cuadrado);

    const altura = ladoPequeno1;
    return altura;
  }
}

function areaTriangulo(lado1, lado2, base) {
  const altura = alturaTraingulo(lado1, lado2, base);
  return (base * altura) / 2;
}

//Código del Círculos

//Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//Area
function areaCirculo(radio) {
  return radio * radio * PI;
}

//Aquí interactuamos con el HTML

// Inputs de cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

// Inputs de triángulo

function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("InputLado1Triangulo");
  const inputLado2 = document.getElementById("InputLado2Triangulo");
  const inputBase = document.getElementById("InputBaseTriangulo");
  const valueLado1 = Number(inputLado1.value);
  const valueLado2 = Number(inputLado2.value);
  const valueBase = Number(inputBase.value);
  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputLado1 = document.getElementById("InputLado1Triangulo");
  const inputLado2 = document.getElementById("InputLado2Triangulo");
  const inputBase = document.getElementById("InputBaseTriangulo");
  const valueLado1 = Number(inputLado1.value);
  const valueLado2 = Number(inputLado2.value);
  const valueBase = Number(inputBase.value);
  const area = areaTriangulo(valueLado1, valueLado2, valueBase);
  alert(area);
}

//Inputs Círculos

function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("InputRadioCirculo");
  const valueRadio = Number(inputRadio.value);
  const perimetro = perimetroCirculo(valueRadio);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const inputRadio = document.getElementById("InputRadioCirculo");
  const valueRadio = Number(inputRadio.value);
  const area = areaCirculo(valueRadio);
  alert(area);
}
