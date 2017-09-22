import {Component, Input} from '@angular/core';
import {Http} from '@angular/http';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouteParams} from '@angular/router-deprecated';

@Component({
  selector: 'cap',
  templateUrl: '/app/components/about/about.html',
  styleUrls: ['/app/components/about/about.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
export class About {

  @Input('cap_id') params: number;
  public cap_id: number;

  constructor(public routeParams: RouteParams) {

  }

  ngOnInit() {
    this.routeParams.get('cap_id');
  }
}
