import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { ListarComponent } from './components/listar/listar.component';
import { GerenciarComponent } from './components/gerenciar/gerenciar.component';
import { BuscarComponent } from './components/buscar/buscar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'gerenciar', component: GerenciarComponent },
  { path: 'buscar', component: BuscarComponent }
];
