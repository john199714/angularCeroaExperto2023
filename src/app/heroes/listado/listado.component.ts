import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  
{
  // LISTADO DE HEROES
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America']


//........ metodo para borrar y mostrar elementos borrados de una lista ..........// 
  //................................ NG FOR ....................................// 
  // INICIALIZA LA VARIABLE QUE CONTIENE LOS ELEMENTOS BORRADOS DE LA LISTA
  heroeBorrado:string  = '';


  // METODO PARA BORRAR HEROE DE LA LISTA SOLO DEL HTML 
  borrarHeroe()
  {

    // EL VALOR DE LA VARIABLE heroeBorrado = EL VALOR DEL ELEMENTO BORRADO DE LA LISTA  Ó A undefined 
    this.heroeBorrado = this.heroes.shift() || '' ;


    // Recoge el valor del 1er elemento de la lista y lo BORRA 
    // this.heroes.shift()
     
  }
//.................................................................................//



}
