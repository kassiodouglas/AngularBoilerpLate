import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiflixComponent } from './notiflix.component';

describe('NotiflixComponent', () => {
  let component: NotiflixComponent;
  let fixture: ComponentFixture<NotiflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotiflixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotiflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
