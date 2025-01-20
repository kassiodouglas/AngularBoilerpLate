/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorComponent } from './error.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '404' }),
            snapshot: { paramMap: { get: (key: string) => '404' } },
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create: core/pages/error/ErrorComponent', () => {
    expect(component).toBeTruthy();
  });

  it('shoudld render the code',()=>{
    const app = fixture.componentInstance;
    const errorCode = app.errorCode;
    const conpiled = fixture.nativeElement as HTMLElement;
    expect(conpiled.querySelector('h1')?.textContent).toContain(errorCode)
  });

  it('shoudld render the message',()=>{
    const app = fixture.componentInstance;
    const errorCode = app.errorMessage;
    const conpiled = fixture.nativeElement as HTMLElement;
    expect(conpiled.querySelector('p')?.textContent).toContain(errorCode)
  });

});
