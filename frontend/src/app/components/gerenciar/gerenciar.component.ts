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
    this.eventos = this.eventoService.listarEventos();
  }

  excluirEvento(index: number) {
    this.eventoService.excluirEvento(index);
    this.eventos = this.eventoService.listarEventos(); // Atualiza a lista após exclusão
  }

  alterarEvento(index: number) {
    const novoNome = prompt('Novo nome do evento:', this.eventos[index].nome);
    if (novoNome !== null && novoNome.trim() !== '') {
      this.eventos[index].nome = novoNome;
      this.eventoService.atualizarEvento(index, this.eventos[index]);
    }
  }

}
