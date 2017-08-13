import { Component, OnInit } from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { FirebaseObjectObservable} from 'angularfire2/database';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
// services
import { ListingService } from '../../services/Listing.service';
// models
import { Post } from 'app/Models/Post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './viewPosts.component.html',
  styleUrls: ['./viewPosts.component.css']
})

export class ViewPostsComponent implements OnInit {
  private listings;
  private searchparam: string;
  constructor(private listingService: ListingService,private toasterService: ToasterService) { }

  ngOnInit() {
    // this.listingService.GetListings().then((res) => {
    //   this.listings = res;
    // }).catch((err) => {
    //   console.log(err);
    // });
  }

  submit() {
    this.listingService.GetListings(this.searchparam).then((res) => {
      this.listings = res;
      console.log(this.listings);
    }).catch((err) => {
      this.createErrorToast();
      console.log(err);
    });
  }

  createErrorToast() {
    const toast = {
      type: 'error',
      title: 'Error!',
      body: 'Unable to get listings for that school'
    }

    this.toasterService.pop(toast);
  }
}
