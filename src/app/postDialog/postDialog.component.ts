// angular injections
import { Component } from '@angular/core';
import { MaterialModule, MdDialog } from '@angular/material';
// models
import { Post } from '../Models/Post';
// services
import { ListingService } from '../services/Listing.service';

@Component({
  selector: '',
  templateUrl: '/postDialog.component.html',
  styleUrls: ['./postDialog.component.css']
})
export class PostComponent {
  pageTitle: string = 'Hello post dialog!';
  post: Post = new Post();

  constructor(private listingService: ListingService){}

  submitPost(){
    this.listingService.CreateListing(this.post);
  }
}
