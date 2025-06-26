import { Component } from '@angular/core';
import { EventoService, Evento } from '../../services/evento.service';
import { FormsModule } from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-buscar',
  standalone: true,
  templateUrl: './buscar.component.html',
  imports: [FormsModule, NgForOf, NgIf],
  styleUrl: './buscar.component.scss'
})
export class BuscarComponent {
  termo: string = '';
  resultados: Evento[] = [];

  constructor(private eventoService: EventoService) {}

  buscar() {
    if (this.termo.trim()) {
      this.eventoService.buscarPorNome(this.termo).subscribe(eventos => {
        this.resultados = eventos;
      });
    } else {
      this.resultados = [];
    }
  }
}
