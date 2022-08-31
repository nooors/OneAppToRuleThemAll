import { CharactersService } from "./characters.service";
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, finalize, Observable, of } from "rxjs";
import { Character, Doc } from "../models/characters";

@Injectable({
  providedIn: "root",
})
export class ListDataSource implements DataSource<Character> {
  private listSubject = new BehaviorSubject<Character>({});
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private charactersService: CharactersService) {}

  connect(collectionViewer: CollectionViewer): Observable<Doc[]> {
    return this.listSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.listSubject.complete();
    this.loadingSubject.complete();
  }

  loadCharacters() {
    this.loadingSubject.next(true);

    this.charactersService
      .getCharacters()
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false)),
      )
      .subscribe((characters) => this.listSubject.next(characters));
  }
}
