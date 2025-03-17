import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablyComponent } from './tably.component';

describe('TablyComponent', () => {
  let component: TablyComponent;
  let fixture: ComponentFixture<TablyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
