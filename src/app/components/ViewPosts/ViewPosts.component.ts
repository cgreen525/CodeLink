import { Component, OnInit } from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { FirebaseObjectObservable} from 'angularfire2/database';
// services
import { AuthProvider } from './../../auth.provider';
import { ListingService } from '../../services/Listing.service';
// models
import { Post } from 'app/Models/Post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './ViewPosts.component.html',
  styleUrls: ['./viewPosts.component.css']
})

export class ViewPostsComponent implements OnInit {
  private listings;
  constructor(public auth: AuthProvider, private listingService: ListingService) { }

  ngOnInit() {
    this.listingService.GetListings().then((res) => {
      this.listings = res;
    }).catch((err) => {
      console.log(err);
    });
  }
}
