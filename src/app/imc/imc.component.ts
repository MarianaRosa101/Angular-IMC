import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})

export class ImcComponent {

  altura: number = 0;
  peso: number = 0;
  imc: number | undefined;
  classificacao: string | undefined;

  calcular(){
      if (this.altura <= 0 || this.peso <= 0) {
        this.imc = undefined;
        this.classificacao = undefined;
        return;
      }

      this.imc = this.peso / (this.altura * this.altura);
      
      if (this.imc < 18.5) {
        this.classificacao = 'Magreza';
      } else if (this.imc >= 18.5 && this.imc <= 24.9) {
        this.classificacao = 'Normal';
      } else if (this.imc >= 25 && this.imc <= 29.9) {
        this.classificacao = 'Sobrepeso';
      } else if (this.imc >= 30 && this.imc <= 34.9) {
        this.classificacao = 'Obesidade grau I';
      } else if (this.imc >= 35 && this.imc <= 39.9) {
        this.classificacao = 'Obesidade grau II';
      } else if (this.imc > 40) {
        this.classificacao = 'Obesidade grau III';
      }
    }
  }