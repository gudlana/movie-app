import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchLaterMoviesPageComponent } from './watch-later-movies-page.component';

describe('WatchLaterMoviesPageComponent', () => {
  let component: WatchLaterMoviesPageComponent;
  let fixture: ComponentFixture<WatchLaterMoviesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchLaterMoviesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchLaterMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
