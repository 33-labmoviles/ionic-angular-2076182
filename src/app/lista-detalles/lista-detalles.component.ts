import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-detalles',
  templateUrl: './lista-detalles.component.html',
  styleUrls: ['./lista-detalles.component.scss'],
})


export class ListaDetallesComponent implements OnInit {

  constructor(private rut: ActivatedRoute, public actionSheetController: ActionSheetController) { }
  ngOnInit() {
    this.obtenerDetalle(this.matricula);
  }

  Alumnos=[
    {Nombre: "Abraham ",
    Apellido:"Ramirez",
    Matricula:"123456"
    },
    {
    Nombre:"Brian",
    Apellido:"Esquivel",
    Matricula:"123456"
    },
    {
    Nombre:"Diego",
    Apellido:"Davila",
    Matricula:"2348932"
    },
    {
    Nombre:"Diego",
    Apellido:"Jasso",
    Matricula:""
    },
    {
    Nombre:"Julio",
    Apellido:"Manuel",
    Matricula:"1092744"
    },
    {
    Nombre:"Luis",
    Apellido:"Armando villanuevas",
    Matricula:"984892342"
    },
    {
    Nombre: "Luis",
    Apellido:"Otiniel Tamez",
    Matricula:"328498324"
    },
    {
    Nombre: "Rogel ",
    Apellido:"Axel",
    Matricula:"12342134"
    },
    {
    Nombre:"Luis ",
    Apellido:"Armando",
    Matricula:"1234213"
    },
    {
    Nombre:"Ricardo ",
    Apellido:"Rocha",
    Matricula:"21341234"
    }];

    alumnoDetalles: any={};
    matricula: string=this.rut.snapshot.params.id;
    obtenerDetalle(matricula: string): any{
      console.log(matricula);

      for (let i = 0; i < this.Alumnos.length; i++) {
        if(matricula==this.Alumnos[i].Matricula){
          this.alumnoDetalles=this.Alumnos[i];
        }
      }
      return this.alumnoDetalles;
    }
    
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      mode:'ios',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
  

}
