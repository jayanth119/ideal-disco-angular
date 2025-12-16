import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; 

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  name : string = '';
  date : Date = new Date();
  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
    this.name = params['name'];
  });
   console.log(name);
    console.log(this.route);
  
   
    
  }

}
