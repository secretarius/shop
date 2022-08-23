import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishtListComponent } from './wish-list.component';

describe('WishListComponent', () => {
  let component: WishtListComponent;
  let fixture: ComponentFixture<WishtListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishtListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
