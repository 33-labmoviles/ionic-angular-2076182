import { Component, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private http: HttpClient) {}
  nombre: String="";
  apellido: String="";
  matricula: String="";

  ngOnInit(): void{
    this.getAlumnos();
  }
  alumnos : any=[];

  getAlumnos(){
    return this.http.get('https://base-56702-default-rtdb.firebaseio.com/alumnos.json').subscribe(res=>
      this.alumnos = res
    )}

onSubmit(AgregarA: NgForm){
console.log("submit")
}
}