// angular injections
import { Component } from '@angular/core';
import { MaterialModule, MdDialog, MdDialogRef } from '@angular/material';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
// models
import { Post } from '../../Models/Post';
// services
import { ListingService } from '../../services/Listing.service';

@Component({
  templateUrl: '/postDialog.component.html',
  styleUrls: ['./postDialog.component.css']
})
export class PostComponent {
  pageTitle: string = 'Hello post dialog!';
  post: Post = new Post();

  constructor(private listingService: ListingService,
              public dialogRef: MdDialogRef<PostComponent>,
              private toasterService: ToasterService) { }

  submitPost() {
    this.listingService.CreateListing(this.post).then((res) => {
      this.dialogRef.close();
      this.createSuccessToast();
    }).catch((err) => {
      this.createErrorToast();
      console.log(err);
    });
  }

  createErrorToast() {
    const toast = {
      type: 'error',
      title: 'Error!',
      body: 'Unable to create listing'
    }

    this.toasterService.pop(toast);
  }

  createSuccessToast() {
    const toast = {
      type: 'success',
      title: 'Success!',
      body: 'Created your new listing'
    }

    this.toasterService.pop(toast);
  }
}
