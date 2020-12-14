import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-spacex-successfull-landing',
  templateUrl: './spacex-successfull-landing.component.html',
  styleUrls: ['./spacex-successfull-landing.component.css']
})
export class SpacexSuccessfullLandingComponent implements OnInit {
  value:any;
  @Output() updatedLandingValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.getValue();
  }
  landTrue(value){
    localStorage.setItem('landing',value==1?'true':'false');
    this.updatedLandingValue.emit(value);
    this.getValue();
  }
  getValue(){
      this.value=localStorage.getItem('landing');
      console.log(this.value);
  }

}
