import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent Services', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with items returned from server', () => {
    
    let todos = [1,2,3];
    
    spyOn(service,'getTodos').and.callFake( () => {
      return Observable.from( [ todos ]);
    });

      // now that were spying on services and faking the call getTodos
      component.ngOnInit();

      expect(component.todos).toBe(todos);
  });

  it('should call the server to save changes when a new item is added', () => {

    let spy =
    spyOn(service, 'add').and.callFake( (t) => {
      return Observable.empty();
    });

    component.add();
     
    expect(spy).toHaveBeenCalled();

  });

  it('should add the new todo returned from server', () => {

    let todo = {id: 1};
    spyOn(service, 'add').and.callFake( (t) => {
      return Observable.from( [ todo ]);
    });

    component.add();
     
    expect(todo.id).toBe(1);

  });

  it('duplicate - diff way todo:  should add the new todo returned from server', () => {

    let todo = {id: 1};
    spyOn(service, 'add').and.returnValue(Observable.from([todo]));

    component.add();
     
    expect(todo.id).toBe(1);

  });

  it('should set error property if server returns error when adding a new todo', () => {

    let error = 'error from server';
    spyOn(service, 'add').and.returnValue(Observable.throw(error));

    component.add();
     
    expect(component.message).toBe(error);

  });

  it('should call server to delete the todo item for server if user confirms', () => {

    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);
     
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should not call server to delete the todo item if user cancels the confirm', () => {

    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);
     
    expect(spy).not.toHaveBeenCalled();
  });
});