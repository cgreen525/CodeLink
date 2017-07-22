import { AuthProvider } from './../../auth.provider';
import { Component, OnInit } from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { FirebaseObjectObservable} from 'angularfire2/database';
// services
import { ListingService } from '../../services/Listing.service';
import { Post } from 'app/Models/Post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  private listings;
  constructor(public auth: AuthProvider, private listingService: ListingService) { }

  ngOnInit() {
    this.listingService.GetListings().then((res) => {
      this.listings = res;
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

}
