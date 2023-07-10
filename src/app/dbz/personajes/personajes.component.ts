import { Personaje } from './../interfaces/dbz.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  @Input('data') personajes: Personaje[] = [];
}
