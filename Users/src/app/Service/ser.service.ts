import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:9090/User/registro';


  createUser(usuario:Usuario){
    return this.http.post<Usuario>(this.Url,usuario);
  }
}
