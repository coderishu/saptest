import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-spacex-successfull-launch',
  templateUrl: './spacex-successfull-launch.component.html',
  styleUrls: ['./spacex-successfull-launch.component.css']
})
export class SpacexSuccessfullLaunchComponent implements OnInit {
value:any;
@Output() updatedValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.getValue();
  }
  hitTrue(value){
    localStorage.setItem('launch',value==1?'true':'false');
    this.updatedValue.emit(value);
    this.getValue();
  }
  getValue(){
      this.value=localStorage.getItem('launch');
      console.log(this.value);
  }
}
