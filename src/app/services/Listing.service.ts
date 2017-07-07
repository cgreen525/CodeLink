// angular injections
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// Models
import { Post } from '../Models/Post';

@Injectable()
export class ListingService {
  posts: FirebaseListObservable<any[]>

  constructor(private fireDatabase: AngularFireDatabase) {
    this.posts =  this.fireDatabase.list('/Listings');
  }

  CreateListing(newPost: Post){
    this.posts.push(newPost)
  }
}
