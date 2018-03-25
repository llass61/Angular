/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpModule, ConnectionBackend } from '@angular/http';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should load todos from the server - using async', async(() => {
    let service = TestBed.get(TodoService);

    spyOn(service, 'getTodosPromise').and.returnValue( Promise.resolve([1,2,3]));

    fixture.detectChanges();

    // wait until everything is done
    fixture.whenStable().then(() => {

      expect(component.todos.length).toBe(3);
      console.log("EXPECT CALLED");
    });
  }));


  it('should load todos from the server - using fakeAsync', fakeAsync(() => {
    let service = TestBed.get(TodoService);

    spyOn(service, 'getTodosPromise').and.returnValue( Promise.resolve([1,2,3]) );

    fixture.detectChanges();

    // wait until everything is done
    tick();

    expect(component.todos.length).toBe(3);
  }));

});
