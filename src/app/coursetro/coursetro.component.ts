import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

interface Post {
  title: string;
  content: string;
  type: string;
  
}



@Component({
  selector: 'app-coursetro',
  templateUrl: './coursetro.component.html',
  styleUrls: ['./coursetro.component.scss']
})
export class CoursetroComponent implements OnInit {
  
  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  title: string;
  content: string;
  id: string;
  type: string;
  
  
  

  constructor(private afs: AngularFirestore) { 
    
  }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
  }
  

  addPost() {
    this.type = new Date().toLocaleString();
    this.afs.collection('posts').add({'title': this.title, 'content': this.content, 'type': this.type});
    alert ('submitted >>> '+ this.title);
    this.title = "";
    this.content = "";
  }

}
