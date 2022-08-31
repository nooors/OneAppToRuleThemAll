import { CharactersService } from "./../../../services/characters.service";
import { Component, OnInit } from "@angular/core";
import { Doc } from "src/app/models/characters";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  displayedColumns = ["name", "race", "gender", "hair", "realm", "spouse"];
  characters!: Doc[];

  /**
   * @constructor
   * @param httpService
   */
  constructor(private httpService: CharactersService) {}

  ngOnInit(): void {
    this.httpService.getCharacters().subscribe((res) => {
      console.log(res);
      this.characters = res;
    });
  }

  onRowClicked(row: any) {
    console.log(row);
  }
}
