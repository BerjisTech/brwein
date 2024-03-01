import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUIComponent } from './shared-ui.component';

describe('SharedUIComponent', () => {
  let component: SharedUIComponent;
  let fixture: ComponentFixture<SharedUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
