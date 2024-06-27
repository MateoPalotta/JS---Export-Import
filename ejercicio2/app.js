// Importamos la clase Persona desde persona.js
import Persona from "./persona.js";

// Creamos instancias de la clase Persona
const persona1 = new Persona("Mateo", 18);
const persona2 = new Persona("Carlos", 40);

// Ejecutamos el método de la clase
persona1.mostrarInformacion(); // Output: Nombre: Mateo, Edad: 25
persona2.mostrarInformacion(); // Output: Nombre: Juan, Edad: 30
