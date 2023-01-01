import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent 
{
  nombre: string = 'Ironman';
  edad: number = 45;

  // GET - este METODO cambiar a MAYUSCULAS 
  get nombreCapitalizado(): string
  {
    return this.nombre.toUpperCase();
  }



  // METODO PARA MOSTRAR EL 1ER NOMBRE
  obtenerNombre(): string
  {
    // Linea 16 Es lo mismo que la linea 17
    // return this.nombre + '-' + this.edad.toString() 
    return `${this.nombre} - ${this.edad}`
  }


  // ......................... one way data binding .............................
  // Quiere decir que las propiedades declaradas en el TS afectan a los metodos y propiedades mostradas en el HTML
  // METODO PARA CAMBIAR DE NOMBRE
  cambiarNombre():void
  {
    this.nombre = 'Spiderman';
  }

  cambiarEdad():void
  {
    this.edad = 25;
  }
  //..........................................................................


}
