import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRecipeComponent } from './work-recipe.component';

describe('WorkRecipeComponent', () => {
  let component: WorkRecipeComponent;
  let fixture: ComponentFixture<WorkRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
