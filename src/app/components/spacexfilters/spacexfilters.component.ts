import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { appConstant } from 'src/app/constants/app.constant';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-spacexfilters',
  templateUrl: './spacexfilters.component.html',
  styleUrls: ['./spacexfilters.component.css']
})
export class SpacexfiltersComponent implements OnInit {
  baseUrl: string = appConstant['baseUrl'];
  response:any=[];
  selectedyear:any;
  @Output() updatedYear = new EventEmitter<string>();
  constructor(private service:ApiCallService) { }

  ngOnInit() {
    this.getYearValues();
    this.getValue();
  }
  getYearValues(){
    let URL='../assets/JSON/year.json';
this.service.getRequest(URL).subscribe(value=>{
  this.response=value;
})
  }
  selectYear(value){
    localStorage.setItem('year',value);
    this.updatedYear.emit(value);
    this.getValue();
  }
  getValue(){
      this.selectedyear=+localStorage.getItem('year');
      
  }
}
