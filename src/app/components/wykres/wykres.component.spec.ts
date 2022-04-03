import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WykresComponent } from './wykres.component';

describe('WykresComponent', () => {
  let component: WykresComponent;
  let fixture: ComponentFixture<WykresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WykresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WykresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
