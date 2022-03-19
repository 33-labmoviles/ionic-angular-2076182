import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lista-detalles',
  templateUrl: './lista-detalles.component.html',
  styleUrls: ['./lista-detalles.component.scss'],
})
export class ListaDetallesComponent implements OnInit {

  constructor(private rut: ActivatedRoute) { }
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
  

}
