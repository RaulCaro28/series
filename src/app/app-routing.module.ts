import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSeriesComponent } from './home/lista-series/lista-series.component';
import { SinopsisComponent } from './home/sinopsis/sinopsis.component';

const routes: Routes = [
  {
    path: 'lista-series',
    component: ListaSeriesComponent
  },
  {
    path: 'sinopsis',
    component: SinopsisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
