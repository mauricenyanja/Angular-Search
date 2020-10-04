import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitsearchFormComponent } from './gitsearch-form.component';

describe('GitsearchFormComponent', () => {
  let component: GitsearchFormComponent;
  let fixture: ComponentFixture<GitsearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitsearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitsearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
