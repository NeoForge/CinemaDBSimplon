import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorCardDetailComponent } from './actor-card-detail.component';

describe('ActorCardDetailComponent', () => {
  let component: ActorCardDetailComponent;
  let fixture: ComponentFixture<ActorCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
