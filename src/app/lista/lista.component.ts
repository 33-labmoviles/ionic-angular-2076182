import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

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

  ngOnInit() {}

}
