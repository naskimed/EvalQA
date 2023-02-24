import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChatComponent } from './first-chat.component';

describe('FirstChatComponent', () => {
  let component: FirstChatComponent;
  let fixture: ComponentFixture<FirstChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
