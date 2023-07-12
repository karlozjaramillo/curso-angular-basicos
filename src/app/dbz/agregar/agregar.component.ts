import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  // @Output() onNuevoPersonaje = new EventEmitter<Personaje>();

  agregar() {
    if (this.personaje.nombre.trim().length === 0) {
      return;
    }
    // this.onNuevoPersonaje.emit(this.personaje);

    this.dbzService.agregarPersonaje(this.personaje);

    this.personaje = {
      nombre: '',
      poder: 0,
    };
  }
}
