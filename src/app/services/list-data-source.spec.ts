import { TestBed } from "@angular/core/testing";

import { ListDataSource } from "./list-data-source";

describe("ListDataSourceService", () => {
  let service: ListDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDataSource);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
