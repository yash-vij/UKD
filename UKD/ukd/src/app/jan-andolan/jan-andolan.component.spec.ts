import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanAndolanComponent } from './jan-andolan.component';

describe('JanAndolanComponent', () => {
  let component: JanAndolanComponent;
  let fixture: ComponentFixture<JanAndolanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanAndolanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JanAndolanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
