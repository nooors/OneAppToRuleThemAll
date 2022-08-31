import { CharactersService } from "./../../../services/characters.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  characters: any;

  /**
   * @constructor
   * @param httpService
   */
  constructor(private httpService: CharactersService) {}

  ngOnInit(): void {
    const cahrater = this.httpService.getCaracter().subscribe((res) => {
      console.log(res);
      this.characters = res;
    });
  }
}
