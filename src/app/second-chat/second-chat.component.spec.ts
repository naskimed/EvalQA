import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChatComponent } from './second-chat.component';

describe('SecondChatComponent', () => {
  let component: SecondChatComponent;
  let fixture: ComponentFixture<SecondChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
