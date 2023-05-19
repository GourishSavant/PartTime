import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private _http :HttpClient) { }

  //load all tha categories 
  public categories ()
  {
    return this._http.get(`${baseUrl}/category/`);
  }
  

}
