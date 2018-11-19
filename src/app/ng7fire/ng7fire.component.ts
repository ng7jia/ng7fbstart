import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ng7fire',
  templateUrl: './ng7fire.component.html',
  styleUrls: ['./ng7fire.component.scss']
})
export class Ng7fireComponent implements OnInit {
  
  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('data').valueChanges();
  }

  ngOnInit() {
  }

}
