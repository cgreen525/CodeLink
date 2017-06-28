// angular injections
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
// Models
import { Post } from '../Models/Post';

@Injectable()
export class ListingService {

  constructor(private fireDatabase: AngularFireDatabase) {
    this.listings = this.fireDatabase.list('/Listings');
  }

  CreateListing(newPost: Post){
    this.listings.push(newPost)
  }

}
