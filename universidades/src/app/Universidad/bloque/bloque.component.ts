import { Component, OnInit } from '@angular/core';
import { Bloque } from 'src/app/Modelos/Bloque';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-bloque',
  templateUrl: './bloque.component.html',
  styleUrls: ['./bloque.component.css']
})
export class BloqueComponent implements OnInit {

  bloque: Bloque=new Bloque();
  constructor(private router:Router,private service:ServiceService) { }
  

  ngOnInit() {
  }

  Guardarb(bloque:Bloque){
    this.service.createBloque(this.bloque)
    .subscribe(data=>{
      alert("Se agrego con exito");
    })
  }

}
