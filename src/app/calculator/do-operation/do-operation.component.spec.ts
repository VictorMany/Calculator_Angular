import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoOperationComponent } from './do-operation.component';

describe('DoOperationComponent', () => {
  let component: DoOperationComponent;
  let fixture: ComponentFixture<DoOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
