import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayaraPetsComponent } from './mayara-pets.component';

describe('MayaraPetsComponent', () => {
  let component: MayaraPetsComponent;
  let fixture: ComponentFixture<MayaraPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MayaraPetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MayaraPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
