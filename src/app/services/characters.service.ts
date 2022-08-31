import { Character, Doc } from "./../models/characters";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CharactersService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${environment.ACCES_TOKEN}`,
    }),
    params: new HttpParams().set("limit", 10),
  };

  /**
   * @constructor
   * @param http
   */
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Doc[]> {
    return this.http
      .get<Character>(`${environment.BASE_URL}/character`, this.httpOptions)
      .pipe(map((res) => res.docs));
  }
}
