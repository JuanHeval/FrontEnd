import { Component, OnInit } from '@angular/core';
import { SerService } from 'src/app/Service/ser.service';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: Usuario= new Usuario();
  constructor(private service:SerService) { }

  ngOnInit() {
  }

  Guardar(usuario:Usuario){
    this.service.createUser(this.usuario)
    .subscribe(data =>{
      alert("Se registro el usuario");
    })
  }

}
