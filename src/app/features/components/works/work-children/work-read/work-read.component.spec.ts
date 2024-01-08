import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkReadComponent } from './work-read.component';

describe('WorkReadComponent', () => {
  let component: WorkReadComponent;
  let fixture: ComponentFixture<WorkReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkReadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
