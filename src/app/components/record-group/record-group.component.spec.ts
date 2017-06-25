import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordGroupComponent } from './record-group.component';

describe('RecordGroupComponent', () => {
  let component: RecordGroupComponent;
  let fixture: ComponentFixture<RecordGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
