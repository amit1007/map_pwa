import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {constantVariable} from './../constant';
import { HttpHeaders } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { console.log('myprofile service');	}
getCoordinateInfo(data) {
  console.log('save coordinate service here');
  // console.log(data);
  // console.log(constantVariable.API_ENDPOINT);
    let headers = new HttpHeaders(); 
        headers.append('Access-Control-Allow-Origin','*');
        headers.append('Access-Control-Allow-Methods','POST');
        headers.append('Access-Control-Allow-Headers','X-Requested-With,content-type');
        headers.append('Content-Type', 'application/json');
    return this.http.post<any>(constantVariable.API_ENDPOINT+'api/bidding/get-address-details',data)
      .pipe(map(res => {
      console.log('res result '+res)
                if(res){
                    //coordinate information saved successfully
                    console.log('coordinate info saved sucessfully');
                    //console.log(res.response)
                }
          return res;
          
      }));
      
}
}
