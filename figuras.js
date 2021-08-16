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

function areaTriangulo(base, altura) {
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
  const inputAltura = document.getElementById("InputAlturaTriangulo");
  const valueLado1 = Number(inputLado1.value);
  const valueLado2 = Number(inputLado2.value);
  const valueBase = Number(inputBase.value);
  const valueAltura = Number(inputAltura.value);
  const area = areaTriangulo(valueBase, valueAltura);
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
