import { AuthProvider } from './../../auth.provider';
import { Component, OnInit } from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { FirebaseObjectObservable} from 'angularfire2/database';
// services
import { ListingService } from '../../services/Listing.service';
import { Post } from 'app/Models/Post';

@Component({
  selector: 'app-landing',
  templateUrl: './landingPage.component.html',
  styleUrls: ['./landingPage.component.css']
})

export class LandingPageComponent implements OnInit {
  private listings;
  constructor(public auth: AuthProvider, private listingService: ListingService) { }

  ngOnInit() {
  //   this.listingService.GetListings().then((res) => {
  //     this.listings = res;
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  }

}
