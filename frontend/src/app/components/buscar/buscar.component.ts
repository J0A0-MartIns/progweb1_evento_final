import { Component } from '@angular/core';
import { EventoService, Evento } from '../../services/evento.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-buscar',
  standalone: true,
  templateUrl: './buscar.component.html',
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrl: './buscar.component.scss'
})
export class BuscarComponent {
  termo: string = '';
  resultados: Evento[] = [];

  constructor(private eventoService: EventoService) {}

  buscar() {
    this.resultados = this.eventoService.buscarPorNome(this.termo);
  }
}
