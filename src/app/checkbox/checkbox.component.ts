import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  // styleUrls: ['./checkbox.component.css']
})
export class CheckBoxComponent implements OnInit {

  @Input() width;
  @Input() marginLeft;
  @Input() marginRight;
  @Input() value;
  
  constructor(private cdr: ChangeDetectorRef) { 
    
  }

  ngOnInit() {

  }
  
  ngOnDestroy(){
    
  }

}
