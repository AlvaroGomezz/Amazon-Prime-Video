import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTopCardComponent } from './slider-top-card.component';

describe('SliderTopCardComponent', () => {
  let component: SliderTopCardComponent;
  let fixture: ComponentFixture<SliderTopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderTopCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
