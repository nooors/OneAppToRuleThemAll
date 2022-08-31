import { TestBed } from '@angular/core/testing';

import { ListDataSourceService } from './list-data-source.service';

describe('ListDataSourceService', () => {
  let service: ListDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
