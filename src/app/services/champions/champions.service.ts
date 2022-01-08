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

/**
 *Fonction qui permet de récupérer tous les champions de la base de données
 *
 */
  getAllChampions(): any {
    return this.championsRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  get(id: any): any {
    return new Observable(obs => {
      this.championsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  updateChampion(champions: Champions): any {
    return new Observable(obs => {
      this.championsRef.doc(champions.id).update(champions)
      obs.next();
    });
  }

  addChampion(champions: Champions): any {
    return new Observable(obs => {
      this.championsRef.add({...champions}).then(() => {
        obs.next();
      })
    })
  }

  deleteChampion(id: any){
    this.db.doc(`champion/${id}`).delete();
  }

  getChampionById(id: any): any {
    return new Observable(obs => {
      this.championsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }


}
