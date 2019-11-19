import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'universidades';

  constructor(private router:Router){

  }

  Bloque(){
    this.router.navigate(["bloque"]);
  }
  Facultad(){
    this.router.navigate(["facultad"]);
  }
  Laboratorio(){
    this.router.navigate(["laboratorio"]);
  }
}
