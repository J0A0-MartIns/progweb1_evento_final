import { Component } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-adicionar',
  standalone: true,
  templateUrl: './adicionar.component.html',
  imports: [
    FormsModule
  ],
  styleUrl: './adicionar.component.scss'
})
export class AdicionarComponent {
  constructor(private eventoService: EventoService) {}

  salvarEvento(form: NgForm) {
    if (form.valid) {
      this.eventoService.adicionarEvento(form.value);
      form.reset();
      alert('Evento adicionado com sucesso!');
    }
  }
}
