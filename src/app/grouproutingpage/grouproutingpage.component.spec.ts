import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouproutingpageComponent } from './grouproutingpage.component';

describe('GrouproutingpageComponent', () => {
  let component: GrouproutingpageComponent;
  let fixture: ComponentFixture<GrouproutingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrouproutingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouproutingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
