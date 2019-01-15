import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperSelectionComponent } from './paper-selection.component';

describe('PaperSelectionComponent', () => {
  let component: PaperSelectionComponent;
  let fixture: ComponentFixture<PaperSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
