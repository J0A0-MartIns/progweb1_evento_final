import { Component } from '@angular/core';
import { EventoService, Evento } from '../../services/evento.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-gerenciar',
  standalone: true,
  templateUrl: './gerenciar.component.html',
  styleUrl: './gerenciar.component.scss',
  imports: [NgForOf]
})
export class GerenciarComponent {
  eventos: Evento[] = [];

  constructor(private eventoService: EventoService) {}

  ngOnInit() {
    this.listarEventos();
  }

  listarEventos() {
    this.eventoService.listarEventos().subscribe(eventos => {
      this.eventos = eventos;
    });
  }

  excluirEvento(id: number) {
    this.eventoService.excluirEvento(id).subscribe(() => {
      this.listarEventos();
    });
  }

  alterarEvento(evento: Evento) {
    const novoNome = prompt('Novo nome do evento:', evento.nome);
    if (novoNome !== null && novoNome.trim() !== '') {
      const eventoAtualizado = { ...evento, nome: novoNome };
      this.eventoService.atualizarEvento(evento.id!, eventoAtualizado).subscribe(() => {
        this.listarEventos();
      });
    }
  }
}
