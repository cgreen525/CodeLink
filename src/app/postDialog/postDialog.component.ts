import { Component } from '@angular/core';
import { MaterialModule, MdDialog } from '@angular/material';


@Component({
  selector: '',
  templateUrl: '/postDialog.component.html',
  styleUrls: ['./postDialog.component.css']
})
export class PostComponent {
  pageTitle: string = 'Hello post dialog!';
  post: Post = new Post();

  submitPost(){
    console.log(this.post);
  }
}

class Post {
  title: string;
  description: string;
  offer: string;

  constructor() {
    this.title = "";
    this.description = "";
    this.offer = "";
  }
}
