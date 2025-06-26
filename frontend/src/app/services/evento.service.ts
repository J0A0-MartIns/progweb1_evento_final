import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Evento {
  id?: number;
  nome: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
  gratuito: boolean;
  local: string;
}

@Injectable({ providedIn: 'root' })
export class EventoService {
  private apiUrl = 'http://localhost:8080/event';

  constructor(private http: HttpClient) {}

  adicionarEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.apiUrl, evento);
  }

  listarEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }

  buscarPorNome(nome: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiUrl}/search?nome=${nome}`);
  }

  excluirEvento(id: number): Observable<Evento> {
    return this.http.delete<Evento>(`${this.apiUrl}/${id}`);
  }

  atualizarEvento(id: number, evento: Evento): Observable<Evento> {
    return this.http.put<Evento>(`${this.apiUrl}/${id}`, evento);
  }

  buscarPorId(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.apiUrl}/${id}`);
  }
}
