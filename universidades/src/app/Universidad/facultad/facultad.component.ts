import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/Modelos/Facultad';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-facultad',
  templateUrl: './facultad.component.html',
  styleUrls: ['./facultad.component.css']
})
export class FacultadComponent implements OnInit {

  facultad: Facultad=new Facultad
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardarf(facultad:Facultad){
    this.service.createFacultad(this.facultad)
    .subscribe(data=>{
      alert("Se agrego con exito");
    })
}
}
