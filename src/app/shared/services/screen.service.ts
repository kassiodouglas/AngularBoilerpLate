import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  private breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  };

  private screenSizeSubject = new BehaviorSubject<string>(this.getScreenSize());
  screenSize$ = this.screenSizeSubject.asObservable();

  constructor() {
    this.updateScreenSize();
    window.addEventListener('resize', () => this.updateScreenSize());
  }

  private getScreenSize(): string {
    const width = window.innerWidth;

    if (width >= this.breakpoints.xl) return 'xl';
    if (width >= this.breakpoints.lg) return 'lg';
    if (width >= this.breakpoints.md) return 'md';
    return 'sm';
  }

  private updateScreenSize() {
    const newSize = this.getScreenSize();
    this.screenSizeSubject.next(newSize);
  }

  get currentSize(): string {
    return this.screenSizeSubject.value;
  }
}
