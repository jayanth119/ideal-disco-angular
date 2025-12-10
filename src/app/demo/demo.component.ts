import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],

})
export class DemoComponent implements OnInit {

  title : string  = 'Jayanth';
  days  : string[] =  ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
  nums  : number[] =  [1,2,3,4,5,6,7];
  text : string = "";
  nu : number = 0;
  isAct : boolean = true;
  name = '';
  submitted = false;
  onSubmit() { 
    console.log(this.name);
    this.submitted = true; }

increase(event: Event) {
  
  if(event.type == "click") {
    this.nu++;
  }
}

decrease(event: Event){

  if(event.type == "click") {
    this.nu--;
  }
}

toggle( ) {
  this.isAct = !this.isAct;
}



  constructor() { }

  ngOnInit(): void {


  }

}
