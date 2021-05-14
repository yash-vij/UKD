import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeologyComponent } from './ideology.component';

describe('IdeologyComponent', () => {
  let component: IdeologyComponent;
  let fixture: ComponentFixture<IdeologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
