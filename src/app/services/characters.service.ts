import { Character, Doc } from "./../models/characters";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CharactersService {
  /**
   * @constructor
   * @param http
   */
  constructor(private http: HttpClient) {}

  getCharacters(
    page: number = 1,
    limit: number = 10,
  ): Observable<Doc[] | undefined> {
    return this.http
      .get<Character>(`${environment.BASE_URL}/character`, {
        params: new HttpParams()
          .set("page", page.toString())
          .set("limit", limit.toString()),
      })
      .pipe(map((res) => res.docs));
  }
  goPage2(): Observable<Character> {
    return this.http.get<Character>(`${environment.BASE_URL}/character`);
  }
}
