import { Component, OnInit } from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { FirebaseObjectObservable} from 'angularfire2/database';
import { Router } from '@angular/router';
// services
import { AuthProvider } from './../../auth.provider';
// models
import { Post } from '../../Models/Post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  constructor(public authService: AuthProvider, private router: Router) { }

  ngOnInit() {
    if(this.authService.isLoggedIn){
      this.router.navigate(['browse']);
    }
    else {
      this.router.navigate(['login']);
    }
  }

}
