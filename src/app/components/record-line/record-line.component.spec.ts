import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordLineComponent } from './record-line.component';

describe('RecordLineComponent', () => {
  let component: RecordLineComponent;
  let fixture: ComponentFixture<RecordLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
