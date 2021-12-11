import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Champions } from 'src/app/models/champions.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private $dbPath = '/champions';
  champions:AngularFirestoreCollection<Champions>

  constructor(
    private db: AngularFirestore
  ) {
    this.champions = db.collection(this.$dbPath);
  }


  getAllChampions(): any {
    return this.champions.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }


}
