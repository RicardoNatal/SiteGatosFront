import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GatoClass } from './gato-c';

@Component({
  selector: 'app-gato-register',
  templateUrl: './gato-register.component.html',
  styleUrls: ['./gato-register.component.scss']
})
export class GatoRegisterComponent {

  gatoClass = new GatoClass;

  url = 'http://localhost:8080/gato';
  headers = new HttpHeaders().set(
    'Content-Type',
    'application/json;charset=UTF-8'
  );

  constructor(private http: HttpClient) {}

  addGato() {
    let options = { headers: this.headers };
    let nome = this.gatoClass.nome;
    let raca = this.gatoClass.raca;
    let cor = this.gatoClass.cor;
    let coisaFavorita = this.gatoClass.coisaFavorita;
    let fotoUrl = this.gatoClass.fotoUrl;
    let email = this.gatoClass.email;

    this.http
      .post(this.url, {
        nome, raca, cor, coisaFavorita, fotoUrl, email, options,
      })
      .toPromise()
      .then((data: any) => {
        console.log(data);
      });
  }

}
