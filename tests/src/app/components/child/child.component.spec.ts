import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { TestingService } from '../../services/testing.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

fdescribe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  let services: TestingService;

  // you have to include the HttpClientModule because
  // it is used in TestingServices and is not a Spy/Mock
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent ],
      imports: [HttpClientModule],
      providers: [ TestingService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('observable value', () => {
    (done: DoneFn) => {
      services.mydata.subscribe(
        value => { expect(value.doc).toBe(90001);
                    done(); }); 
      }

});
});
