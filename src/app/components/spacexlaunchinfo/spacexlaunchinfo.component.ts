import { Component, OnInit } from '@angular/core';
import { appConstant } from 'src/app/constants/app.constant';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-spacexlaunchinfo',
  templateUrl: './spacexlaunchinfo.component.html',
  styleUrls: ['./spacexlaunchinfo.component.css']
})
export class SpacexlaunchinfoComponent implements OnInit {
  response: any = [];
  launchUpdatedValue: any;
  landUpdatedValue: any;
  currentYear: any;
  baseUrl: string = appConstant['baseUrl'];
  constructor(private service: ApiCallService) { }

  ngOnInit() {
    if (localStorage.getItem('year') === null && localStorage.getItem('launch') === null && localStorage.getItem('landing') === null) {
      this.firstTime();
    }
    if (localStorage.getItem('year') !== null && localStorage.getItem('launch') !== null && localStorage.getItem('landing') !== null) {
      this.ApplyAllFilter();
    }
    if (localStorage.getItem('launch') !== null && localStorage.getItem('landing') !== null) {
      this.landlaunch();
    }
    if (localStorage.getItem('launch') !== null && localStorage.getItem('year') !== null) {
      this.launchyear();
    }
    if (localStorage.getItem('landing') !== null && localStorage.getItem('year') !== null) {
      this.yearlanding();
    }
  }
  firstTime() {
    this.service.showLoader();
    let URL = this.baseUrl + "launches?limit=100";
    this.service.getRequest(URL).subscribe(value => {
      this.response = value;
      this.service.hideLoader();
    })
  }
  ApplyAllFilter() {
    let launch = localStorage.getItem('launch');
    let landing = localStorage.getItem('landing');
    let year = localStorage.getItem('year')
    this.service.showLoader();
    let URL = this.baseUrl + `launches?limit=100&launch_success=${launch}&land_success=${landing}&launch_year=${year}`;
    this.service.getRequest(URL).subscribe(value => {
      this.response = value;
      this.service.hideLoader();
    })
  }

  landlaunch() {
    if (localStorage.getItem('launch') !== null && localStorage.getItem('landing') !== null) {
      let launch = localStorage.getItem('launch');
      let landing = localStorage.getItem('landing');
      this.service.showLoader();
      let URL = this.baseUrl + `launches?limit=100&launch_success=${launch}&land_success=${landing}`;
      this.service.getRequest(URL).subscribe(value => {
        this.response = value;
        this.service.hideLoader();
      })
    }
  }

  launchyear() {
    if (localStorage.getItem('launch') !== null && localStorage.getItem('year') !== null) {
      let launch = localStorage.getItem('launch');
      let year = localStorage.getItem('year');
      this.service.showLoader();
      let URL = this.baseUrl + `launches?limit=100&launch_success=${launch}&launch_year=${year}`;
      this.service.getRequest(URL).subscribe(value => {
        this.response = value;
        this.service.hideLoader();
      })
    }
  }

  yearlanding() {
    if (localStorage.getItem('landing') !== null && localStorage.getItem('year') !== null) {
      let landing = localStorage.getItem('landing');
      let year = localStorage.getItem('year');
      this.service.showLoader();
      let URL = this.baseUrl + `launches?limit=100&land_success=${landing}&launch_year=${year}`;
      this.service.getRequest(URL).subscribe(value => {
        this.response = value;
        this.service.hideLoader();
      })
    }
  }

  launch() {
    if (localStorage.getItem('launch') !== null) {
      let launch = localStorage.getItem('launch');
      this.service.showLoader();
      let URL = this.baseUrl + `launches?limit=100&launch_success=${launch}`;
      this.service.getRequest(URL).subscribe(value => {
        this.response = value;
        this.service.hideLoader();
      })
    }
  }
  land() {
    if (localStorage.getItem('landing') !== null) {
      let landing = localStorage.getItem('landing');
      this.service.showLoader();
      let URL = this.baseUrl + `launches?limit=100&land_success=${landing}`;
      this.service.getRequest(URL).subscribe(value => {
        this.response = value;
        this.service.hideLoader();
      })
    }
  }
  year() {
    if (localStorage.getItem('year') !== null) {
      let year = localStorage.getItem('year');
      this.service.showLoader();
      let URL = this.baseUrl + `launches?limit=100&launch_year=${year}`;
      this.service.getRequest(URL).subscribe(value => {
        this.response = value;
        this.service.hideLoader();
      })
    }
  }

  updatedValue(event) {
    this.launchUpdatedValue = event;
    if (localStorage.getItem('launch') !== null && localStorage.getItem('landing') !== null) {
      this.landlaunch();
    }
    if (localStorage.getItem('launch') !== null && localStorage.getItem('year') !== null) {
      this.launchyear();
    }
    if (localStorage.getItem('launch') !== null && localStorage.getItem('landing') == null && localStorage.getItem('year') == null)
      this.launch();
  }
  updatedLandingValue(event) {
    this.landUpdatedValue = event;
    if (localStorage.getItem('launch') !== null && localStorage.getItem('landing') !== null) {
      this.landlaunch();
    }
    if (localStorage.getItem('launch') !== null && localStorage.getItem('year') !== null) {
      this.launchyear();
    }
    if (localStorage.getItem('landing') !== null && localStorage.getItem('launch') == null && localStorage.getItem('year') == null)
      this.land();
  }
  updatedYear(event) {
    this.currentYear = event;
    if (localStorage.getItem('launch') !== null && localStorage.getItem('year') !== null) {
      this.launchyear();
    }
    if (localStorage.getItem('landing') !== null && localStorage.getItem('year') !== null) {
      this.yearlanding();
    }
    if (localStorage.getItem('year') !== null && localStorage.getItem('launch') == null && localStorage.getItem('landing') == null)
      this.year();
  }
}

