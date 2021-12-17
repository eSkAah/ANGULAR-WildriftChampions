import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Champions } from 'src/app/models/champions.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private dbPath = '/champion';
  championsRef:AngularFirestoreCollection<Champions>

  constructor(
    private db: AngularFirestore
  ) {
    this.championsRef = db.collection(this.dbPath);
  }


  getAllChampions(): any {
    return this.championsRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  addChampion(champions: Champions): any {
    return new Observable(obs => {
      this.championsRef.add({...champions}).then(() => {
        obs.next();
      })
    })
  }


}
