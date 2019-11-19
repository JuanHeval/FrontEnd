import { Injectable } from '@angular/core';
import { Bloque } from '../Modelos/Bloque';
import { Facultad } from '../Modelos/Facultad';
import { Laboratorio } from '../Modelos/Laboratorio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/univer/bloquess';

  createBloque(bloque:Bloque){
    return this.http.post<Bloque>(this.Url+"/este",bloque);
  }
  createFacultad(facultad:Facultad){
    return this.http.post<Facultad>(this.Url+"/facul",facultad);
  }
  //createLaboratorio(laboratorio:Laboratorio){
  //  return this.http.post<Laboratorio>(this.Url,laboratorio);
  //}
}

