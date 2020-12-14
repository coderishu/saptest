import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotFoundComponent {

  constructor(private router:Router,private service:ApiCallService) { }

  addTemplate(){
    this.service.getRequest(null);
    this.router.navigate(['/']);
  }

}
