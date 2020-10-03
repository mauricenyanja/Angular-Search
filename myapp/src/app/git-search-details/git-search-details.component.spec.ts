import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearchDetailsComponent } from './git-search-details.component';

describe('GitSearchDetailsComponent', () => {
  let component: GitSearchDetailsComponent;
  let fixture: ComponentFixture<GitSearchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitSearchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
