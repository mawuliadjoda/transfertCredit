import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixOperationComponent } from './choix-operation.component';

describe('ChoixOperationComponent', () => {
  let component: ChoixOperationComponent;
  let fixture: ComponentFixture<ChoixOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
