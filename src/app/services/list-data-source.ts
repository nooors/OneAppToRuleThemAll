import { CharactersService } from './characters.service';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { Doc } from '../models/characters';

@Injectable({
  providedIn: 'root',
})
export class ListDataSource implements DataSource<Doc> {
  private listSubject = new BehaviorSubject<Doc[]>([]);
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

  loadCharacters(page: number = 1, limit: number = 10) {
    this.loadingSubject.next(true);

    this.charactersService
      .getCharacters(page, limit)
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((characters) => this.listSubject.next(characters!));
  }
}
