import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VoterComponent } from './voter.component';
import { Component } from '@angular/core';

describe('VoterComponent', () => {
let component: VoterComponent;
let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule( {
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.nativeElement
  });

  it('it should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    button.triggerEventHandler('click',null);
    fixture.detectChanges();

    expect(component.totalVotes).toBe(21);
  });

  it('should increase total votes when I click the upvote', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    button.triggerEventHandler('click',null);
    fixture.detectChanges();

    expect(component.totalVotes).toBe(1);
  });
});
