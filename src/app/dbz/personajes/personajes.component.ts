import { DbzService } from '../services/dbz.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  get personajes() {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {
    this.dbzService;
  }
}
