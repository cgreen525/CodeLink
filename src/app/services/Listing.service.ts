// angular injections
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// Models
import { Post } from '../Models/Post';

@Injectable()
export class ListingService {
  listings: FirebaseListObservable<any[]>

  constructor(private fireDatabase: AngularFireDatabase) {
    this.listings =  this.fireDatabase.list('/Listings');
  }

  CreateListing(newPost: Post) {
    const response = new Promise((resolve, reject) => {
      try {
        this.listings.push(newPost);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
    return response;
  }

  GetListings() {
    const response = new Promise((resolve, reject) => {
      try
      {
        this.listings.subscribe(posts => {
          resolve(posts);
        });
      }
      catch (err)
      {
        reject(err);
      }
    });
    return response;
  }
}
