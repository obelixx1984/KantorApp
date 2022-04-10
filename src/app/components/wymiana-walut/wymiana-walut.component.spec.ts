import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WymianaWalutComponent } from './wymiana-walut.component';

describe('WymianaWalutComponent', () => {
  let component: WymianaWalutComponent;
  let fixture: ComponentFixture<WymianaWalutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WymianaWalutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WymianaWalutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
