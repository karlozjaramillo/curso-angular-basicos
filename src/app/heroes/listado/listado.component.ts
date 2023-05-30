import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Iron Man',
    'Hulk',
    'Thor',
    'Capitán América'
  ];

  heroeBorrado: string = '';
  borrarHeroe() {
    let heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
  }
}
