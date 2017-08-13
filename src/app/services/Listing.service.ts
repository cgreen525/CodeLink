// angular injections
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// Models
import { Post } from '../Models/Post';

@Injectable()
export class ListingService {
  listings: FirebaseListObservable<any[]>
  schools: FirebaseListObservable<any[]>

  constructor(private fireDatabase: AngularFireDatabase) {
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

  GetListings(school: string) {
    const response = new Promise((resolve, reject) => {
      try
      {
        this.listings = this.fireDatabase.list('/schools/' + school);

        this.listings.subscribe(posts => {
          resolve(posts);
        }, err => {
          reject(err);
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
