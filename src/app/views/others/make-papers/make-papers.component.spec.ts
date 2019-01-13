import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePapersComponent } from './make-papers.component';

describe('MakePapersComponent', () => {
  let component: MakePapersComponent;
  let fixture: ComponentFixture<MakePapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakePapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakePapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
