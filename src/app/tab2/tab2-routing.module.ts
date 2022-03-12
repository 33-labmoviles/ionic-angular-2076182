import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDetallesComponent } from '../lista-detalles/lista-detalles.component';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'lista-detalles',
    component: ListaDetallesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
