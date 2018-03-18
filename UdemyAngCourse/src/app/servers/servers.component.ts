import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // components
  //selector: '[app-servers]', // attributes
  //selector: '.app-servers',  // class
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreation: string = "No server was created";
  serverName = "default";
  serverCreate = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => this.allowNewServer = true, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreate = true;
    this.servers.push(this.serverName);
    this.serverCreation = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(evt: Event): void
  {
    this.serverName = (<HTMLInputElement>evt.target).value;
  }
}
