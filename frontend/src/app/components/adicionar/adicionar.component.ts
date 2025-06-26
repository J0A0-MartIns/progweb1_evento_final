import { Component } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adicionar',
  standalone: true,
  templateUrl: './adicionar.component.html',
  imports: [CommonModule, FormsModule],
  styleUrl: './adicionar.component.scss'
})
export class AdicionarComponent {
  constructor(private eventoService: EventoService) {}

  salvarEvento(form: NgForm) {
    if (form.valid) {
      this.eventoService.adicionarEvento(form.value).subscribe(() => {
        alert('Evento adicionado com sucesso!');
        form.reset();
      });
    }
  }
}
