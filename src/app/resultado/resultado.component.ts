import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  bmi: number;
  resultado!: string;
  interpretacion!: string;

  constructor(private aRoute: ActivatedRoute) {
    this.bmi = this.aRoute.snapshot.params.valor;
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado(): void {

    if (this.bmi >= 25) {
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal. Intente hacer más ejercicio.';
    } else if (this.bmi >= 18.5) {
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un peso corporal normal. ¡Buen trabajo!';
    } else {
      this.resultado = 'Bajo peso';
      this.interpretacion = 'Tienes un peso corporal más bajo de lo normal. Puedes comer un poco más.';
    }
  }

}
