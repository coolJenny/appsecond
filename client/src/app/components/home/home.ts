import {Component, EventEmitter} from '@angular/core';
import {Http} from '@angular/http';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouteParams} from '@angular/router-deprecated';

import {About} from '../about/about';

@Component({
  selector: 'home',
  templateUrl: '/app/components/home/home.html',
  styleUrls: ['/app/components/home/home.css'],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})

@RouteConfig([
  // { path: '/:cap_id',      component: About,       name: 'About' },
  { path: '/cap',      component: About,       name: 'About' }
])

export class Home {

	public cap_names = [ 'Ewing sarcoma biopsy', 'Ewing sarcoma resection', 'Extragonadal germ cell tumor biopsy/resection',
  										 'Hepatoblastoma biopsy/resection', 'Rhabdomyosarcoma biopsy/resection' ];

	public trs = [ {td1s:['Bone and soft tissue', 'Breast', 'Central nervous system', 'Endocrine']},
								 {td2s:['Gastrointestinal', 'Genitourinary', 'Gynecologic', 'Head and neck']},
								 {td3s:['Hematologic', 'Ophthalmic', 'Pediatric', 'Skin']},
								 {td4s:['Torax', 'Other', '', '']} ];
	
  constructor(private router: Router, private cap_id: RouteParams) {
  	
  }

  ngOnInit() {

  }

  showCapPage(cap_id: number){
  	console.log(cap_id);
  	this.router.navigate(['About', {param: cap_id}]);
  }

}
