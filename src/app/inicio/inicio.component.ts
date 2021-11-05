import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad:number = 25;
  peso:number = 60;
  altura:number = 170;
  sexo:string = 'Masculino';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  masculino():void{
    this.sexo = 'Masculino';
  }

  femenino():void{
    this.sexo = 'Femenino';
  }

  cambiarAltura(event: any):void{
    this.altura = event.target.value;
  }

  controlPeso(bandera:boolean = false):void{
    if(bandera === false){
      this.peso = this.peso - 1;
    }else{
      this.peso = this.peso + 1;
    }
  }

  controlEdad(bandera: boolean = false):void{
    if(bandera === false && this.edad > 0){
      this.edad = this.edad - 1;
    }else{
      this.edad = this.edad + 1;
    }
  }

  calcular():void{
    const BMI = this.peso / Math.pow(this.altura/100,2);
    this.router.navigate(['resultado',BMI.toFixed(1)]);
  }

}
