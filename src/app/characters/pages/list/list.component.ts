import { Character } from './../../../models/characters';
import { CharactersService } from './../../../services/characters.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ListDataSource } from 'src/app/services/list-data-source';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {
  character!: Character;
  dataSource!: ListDataSource;
  displayedColumns = ['name', 'race', 'gender', 'hair', 'realm', 'spouse'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /**
   * @constructor
   * @param httpService
   */
  constructor(
    private httpService: CharactersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.character = this.route.snapshot.data['character'];
    this.dataSource = new ListDataSource(this.httpService);
    this.dataSource.loadCharacters();
  }

  ngAfterViewInit(): void {
    this.paginator.page.pipe(tap(() => this.loadCharactersPage())).subscribe();
  }

  loadCharactersPage() {
    this.dataSource.loadCharacters(this.character);
  }
  onRowClicked(row: any) {
    console.log(row);
  }
}
