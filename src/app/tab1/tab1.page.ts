import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 

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
      
      constructor() {}
@Input() Nombre: String="";
@Input() Apellido: String="";
@Input() Matricula: String="";

Agregar(): void{
var AgregarAlum: any={
  "Nombre":this.Nombre,
  "Apellido":this.Apellido,
  "Matricula":this.Matricula
}
  
  this.Alumnos.push(AgregarAlum);
  this.Alumnos.sort(function(a,b){
    var nama = a.Nombre.toUpperCase();
    var namb  =b.Nombre.toUpperCase();
    if(nama < namb){
      return -1;}
      
    if(nama > namb){
      return 1;}

    return 0;
  });
  console.log(this.Alumnos);

}
}
