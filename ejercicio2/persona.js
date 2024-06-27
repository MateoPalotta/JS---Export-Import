// Representa una persona con propiedades y métodos asociados.
class Persona {
  // Crea una nueva instancia de la clase Persona con el nombre y edad.
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Muestra la información de la persona en la consola.
  mostrarInformacion() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
}
// La clase Persona se exporta como default
export default Persona;
