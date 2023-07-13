import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() personaje: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: DbzService) {}

  agregar() {
    if (this.personaje.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.personaje);

    this.personaje = {
      nombre: '',
      poder: 0,
    };
  }
}
