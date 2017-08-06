import { Component, OnInit } from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { FirebaseObjectObservable} from 'angularfire2/database';
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
  
  constructor(public auth: AuthProvider) { }

  ngOnInit() { }

}
