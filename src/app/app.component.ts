import { Component } from '@angular/core';
import { Routes,Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){

  }
  title = 'Project-2';
  
}
