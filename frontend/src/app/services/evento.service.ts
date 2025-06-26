import { Injectable } from '@angular/core';

export interface Evento {
  nome: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
  gratuito: boolean;
  local: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private eventos: Evento[] = [];

  constructor() {
    const eventosSalvos = localStorage.getItem('eventos');
    if (eventosSalvos) {
      this.eventos = JSON.parse(eventosSalvos);
    }
  }

  private salvarNoLocalStorage() {
    localStorage.setItem('eventos', JSON.stringify(this.eventos));
  }

  adicionarEvento(evento: Evento) {
    this.eventos.push(evento);
    this.salvarNoLocalStorage();
  }

  listarEventos(): Evento[] {
    return this.eventos;
  }

  buscarPorNome(nome: string): Evento[] {
    return this.eventos.filter(evento =>
      evento.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }

  excluirEvento(index: number) {
    this.eventos.splice(index, 1);
    this.salvarNoLocalStorage();
  }

  atualizarEvento(index: number, eventoAtualizado: Evento) {
    this.eventos[index] = eventoAtualizado;
    this.salvarNoLocalStorage();
  }
}

