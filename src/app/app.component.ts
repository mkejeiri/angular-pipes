import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterStatus='all';
  /**
   * this a async call since it use a promise, it's like an observable,
   * we have to subscribe to it otherwise we will get [object Promise] in
   * the template, luckily async is a pipe which do this subscription for us.
   */
  statusAsync= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('stable');
    },2000);
  })
  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'critical',
      name: 'Production Environment backup is down',
      status: 'critical',
      started: new Date(15, 1, 2017)
    }

  ];
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddCriticalServer(){
    this.servers.push({
      instanceType: 'critical',
      name: 'Critical --- Added through button',
      status: 'critical',
      started: new Date(15, 1, 2017)
    });

  }

  onAddStableServer(){
    this.servers.push({
      instanceType: 'stable',
      name: 'Stable --- Added through button',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }

  onAddOfflineServer(){
    this.servers.push({
      instanceType: 'offline',
      name: 'Offline --- Added through button',
      status: 'offline',
      started: new Date(15, 1, 2017)
    });
  }
}
