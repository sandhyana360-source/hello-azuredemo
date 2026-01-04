import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  message= '';
  constructor(private api: ApiService){}
  ngOnInit() {
   this.api.getMessage().subscribe({
    next: data => this.message=data,
    error: ()=> this.message='Api not reachable'
   }) ;
  }
  
}
