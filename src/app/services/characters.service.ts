import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ACCES_TOKEN, BASE_URL } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CharactersService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCES_TOKEN}`,
    }),
    params: new HttpParams().set("limit", 10),
  };

  /**
   * @constructor
   * @param http
   */
  constructor(private http: HttpClient) {}

  getCaracter() {
    return this.http.get<Observable<any>>(
      `${BASE_URL}/character`,
      this.httpOptions,
    );
  }
}
