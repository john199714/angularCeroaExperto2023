import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  titulo:string = 'Contador App';

  numero: number = 10;
  
  base: number = 5;
  // VALOR es un numero que se va a incrementar al NUMERO ya declarado
  acumular(valor:number)
  {
    this.numero = this.numero + valor;
  }
   
  restar(valor:number)
  {
    if (this.numero > 0 ) 
    {
      this.numero = this.numero + valor;
    }
    
    else  
    {
      this.numero = this.numero;  
    }
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
