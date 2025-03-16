import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablyRowComponent } from './tably-row.component';

describe('TablyRowComponent', () => {
  let component: TablyRowComponent;
  let fixture: ComponentFixture<TablyRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablyRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
