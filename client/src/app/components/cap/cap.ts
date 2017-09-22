import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'cap',
  templateUrl: '/app/components/cap/cap.html',
  styleUrls: ['/app/components/cap/cap.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Cap {

  constructor(http: Http) {
    
  }

  ngOnInit() {

  }
}
