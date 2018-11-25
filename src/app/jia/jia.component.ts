import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item {
  id: string;
  title: string;
}

@Component({
  selector: 'app-jia',
  templateUrl: './jia.component.html',
  styleUrls: ['./jia.component.scss']
})
export class JiaComponent implements OnInit {
  
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
    
  }

  ngOnInit() {
  }
  
    addItem(title: string) {
    // Persist a document id
    const id = this.afs.createId();
    const item: Item = { id, title };
    this.itemsCollection.doc(id).set(item);
  }
  
}
