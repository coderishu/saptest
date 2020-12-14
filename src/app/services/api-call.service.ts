import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpClient:HttpClient,private spinner: NgxSpinnerService) { }
  getRequest(url) {
    return this.httpClient.get(url)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "server error.");
  }
  showLoader(){
    this.spinner.show();
  }
  hideLoader(){
    this.spinner.hide();
  }
}
