import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import {HttpClient} from '@angular/common/http';
const apiurl=environment.apiurl;
const apikey=environment.apikey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }



  getdata(url){

    return  this.http.get(`${apiurlg}/${url}&apiKey=${apikey}`);
    
  }
}
