import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  public numero1: number = 0 ; 
  public numero2 : number = 0 ; 
  public resultado : string | number  = "esperando operacion" ;

  public sumar() : void {
    console.log("sumando");
    this.resultado = this.numero1 + this.numero2 ; 
  }
  public restar() : void{
    this.resultado = this.numero1 - this.numero2 ; 
  }
  public multiplicar() : void{
    this.resultado = this.numero1 * this.numero2 ; 
  }
  public dividir() : void{
    if(this.numero2 == 0){
      alert("No se puede dividir por cero");
      return ;
    }
    this.resultado = this.numero1 / this.numero2 ; 
  }
  public restear() : void{
    this.numero1 = 0 ; 
    this.numero2 = 0 ; 
    this.resultado = "esperando operacion"; 
  }
}
