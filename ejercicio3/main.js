// Importar la clase Calculadora desde calculadora.js
import Calculadora from "./calculadora.js";

// Crear una instancia de la clase Calculadora
const calculadora = new Calculadora();

// Usar los métodos y mostrar los resultados en la consola
console.log("5 x 5 =", calculadora.multiplicar(5, 5));
console.log("36 / 2 =", calculadora.dividir(36, 2));
