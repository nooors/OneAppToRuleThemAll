import { CharactersService } from "./../../../services/characters.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  displayedColumns = ["name", "race", "gender", "hair", "realm", "spouse"];
  characters: any;
  dataSource: any;

  /**
   * @constructor
   * @param httpService
   */
  constructor(private httpService: CharactersService) {}

  ngOnInit(): void {
    this.httpService.getCharacters().subscribe((res) => {
      console.log("PACHA", res);
      this.characters = res;
      this.dataSource = res.docs;
    });
  }

  onRowClicked(row: any) {
    console.log(row);
  }
}
