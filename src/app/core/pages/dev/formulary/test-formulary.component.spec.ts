import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormularyComponent } from './test-formulary.component';

describe('TestFormularyComponent', () => {
  let component: TestFormularyComponent;
  let fixture: ComponentFixture<TestFormularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestFormularyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFormularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
