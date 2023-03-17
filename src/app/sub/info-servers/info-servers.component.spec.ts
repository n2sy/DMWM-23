import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoServersComponent } from './info-servers.component';

describe('InfoServersComponent', () => {
  let component: InfoServersComponent;
  let fixture: ComponentFixture<InfoServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoServersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
