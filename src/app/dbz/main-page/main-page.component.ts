import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 17000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  personaje: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  };

  agregarNuevoPersonaje(event: Personaje) {
    this.personajes.push(event);
  }

  constructor(private dbzService: DbzService) {}
}
