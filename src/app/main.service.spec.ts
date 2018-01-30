import { TestBed, inject } from '@angular/core/testing';

import {HttpModule} from '@angular/http';
import { MainService } from './main.service';

describe('MainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
		imports: [HttpModule],
		providers: [MainService]
    }).compileComponents();
  });

  it('should be created', inject([MainService], (service: MainService) => {
    expect(service).toBeTruthy();
  }));
});
