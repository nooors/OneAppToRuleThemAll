import { CharactersService } from "./../../../services/characters.service";
import { Component, OnInit } from "@angular/core";
import { ListDataSource } from "src/app/services/list-data-source";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  displayedColumns = ["name", "race", "gender", "hair", "realm", "spouse"];

  dataSource!: ListDataSource;

  /**
   * @constructor
   * @param httpService
   */
  constructor(private httpService: CharactersService) {}

  ngOnInit(): void {
    this.dataSource = new ListDataSource(this.httpService);
    this.dataSource.loadCharacters();
  }

  onRowClicked(row: any) {
    console.log(row);
  }
}
