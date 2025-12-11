import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit  , OnChanges{
  @Input() child: string = '';
  @Output() notifyParent : EventEmitter<string> = new EventEmitter<string>();

  constructor() { 

     console.log(0);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
   
  }

  sendMessage() {
    this.notifyParent.emit("Hello Parent!");
  } 
  
  ngOnInit(): void {
    console.log(1);
    
  }



}
