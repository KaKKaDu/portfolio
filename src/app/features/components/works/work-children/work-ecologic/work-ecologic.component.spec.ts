import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEcologicComponent } from './work-ecologic.component';

describe('WorkEcologicComponent', () => {
  let component: WorkEcologicComponent;
  let fixture: ComponentFixture<WorkEcologicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkEcologicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkEcologicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
