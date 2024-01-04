import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cake } from '../model/cake';
const baseURL = 'http://localhost:3000/api/cakes'
@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private http:HttpClient) { }

  getCakes(params?:any):Observable<Cake[]> {
    let options = {}

    if(params) {
      options = {
        params: new HttpParams().set('sort',params.sort ||"").set('sortDirection',params.sortDirection ||"").
        set('filter',params.filter && JSON.stringify(params.filter) ||"")
      }
    }
    return this.http.get(baseURL).pipe(map((data:any) => {return data.map((elem:any) => new Cake(elem))}))
  } 
}
