import { TestBed, ComponentFixture } from '@angular/core/testing';

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

  it('', () => {
  });
});
