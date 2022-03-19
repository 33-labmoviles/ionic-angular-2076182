import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListaDetallesComponent } from './lista-detalles.component';
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ListaDetallesComponent],
  exports: [ListaDetallesComponent]
})
export class ListaComponentModule {}