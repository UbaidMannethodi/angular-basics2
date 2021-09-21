import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParantComponent } from './child-to-parant.component';

describe('ChildToParantComponent', () => {
  let component: ChildToParantComponent;
  let fixture: ComponentFixture<ChildToParantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildToParantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToParantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
