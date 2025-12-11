import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit , AfterViewInit {
  parentValue : string = 'Kerala jayanth';
  @ViewChild('nameInput') element : ElementRef | undefined;;
  

  receiveMessage(data: string) {
  console.log("Message from Child:", data); 
}


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  if (this.element) {
    this.element.nativeElement.focus();
          console.log(this.element.nativeElement);
        } else {
          console.warn('element is undefined. Element might not be rendered yet.');
        }
}

}
