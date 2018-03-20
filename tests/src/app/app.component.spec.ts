import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestingService, Form } from './services/testing.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import { HttpClient, HttpHandler } from '@angular/common/http';

const Frms: Form[] = [
  { "doc": 9000, "acct": 8000, "form": 7000 },
  { "doc": 9001, "acct": 8001, "form": 7001 },
  { "doc": 9002, "acct": 8002, "form": 7002 }
];

describe('AppComponent', () => {

  let serviceStub: Partial<TestingService>;
  serviceStub = {
    mydata:  new BehaviorSubject<Form>(null),
    getData() 
    {
      let i = 0;
      this.mydata.next(Frms[0]);
    }
  };  
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: TestingService, useValue: serviceStub}
      ]
    }).compileComponents();
  }));

  it('#onGetForm click - get new form data', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let comp = fixture.componentInstance;
    comp.onGetForm();
    fixture.detectChanges();

    expect(comp.frm.doc).toBe(9000);
  }));

  // it('test isOn indicator', async(() => {
  //   const comp = new AppComponent();
  //   //const app = fixture.debugElement.componentInstance;
  //   expect(comp.isOn).toBe(false, 'off at first');
  //   comp.clicked();
  //   expect(comp.isOn).toBe(true, 'on after click');
  //   comp.clicked();
  //   expect(comp.isOn).toBe(false, 'off after second click');
  // }));

  // it(`#clicked() should toggle #isOn`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // });
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});

// fdescribe('AppComponent2', () => {
  
//   let httpSpy: { get: jasmine.Spy };
//   let service: TestingService;

//   beforeEach(() => {
//     httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
//     service = new TestingService(<any> httpSpy);
//   }));

//   it('#onGetForm click - get new form data', async(() => {
//     let fixture = TestBed.createComponent(AppComponent);
//     let comp = fixture.componentInstance;
//     comp.onGetForm();
//     fixture.detectChanges();

//     expect(comp.frm.doc).toBe(9000);
//   }));
// });
