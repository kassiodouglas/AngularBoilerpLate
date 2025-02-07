/* tslint:disable:no-unused-variable */

import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { SidebarService } from './sidebar.service';

describe('Service: Sideabr', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarService]
    });
  });

  it('should ...', inject([SidebarService], (service: SidebarService) => {
    expect(service).toBeTruthy();
  }));
});
