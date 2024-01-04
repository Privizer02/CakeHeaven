import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cake } from '../model/cake';
import { User } from '../model/user';
import { Message } from '../model/message';
import { SlideShow } from '../model/slideshow';
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
    return this.http.get(baseURL,options).pipe(map((data:any) => {return data.map((elem:any) => new Cake(elem))}))
  } 

  getIngredients():Observable<string[]> {
    return this.http.get(`http://localhost:3000/api/ingredients`).pipe(map((data:any)=>{return data as Array<string>}))
  }

  getCake(cakeId:number):Observable<Cake> {
    return this.http.get(baseURL+`/`+cakeId).pipe(map((data:any) =>{return new Cake(data)}))
  }

  getUser():Observable<User> {
    return this.http.get(`http://localhost:3000/api/user`).pipe(map((data:any) => {return new User(data[0])}))
  }

  editUser(user:User):Observable<User> {
    return this.http.put(`http://localhost:3000/api/user/${user._id}`,user).pipe(map((data:any) => {return new User(data)}))
  }

  sendMessage(message:Message):Observable<Message> {
    return this.http.post(`http://localhost:3000/api/messages`,message).pipe(map((data:any)=>{return new Message(data)}))
  }

  getSlideshow():Observable<SlideShow[]> {
    return this.http.get(`http://localhost:3000/api/slideshow`).pipe(map((data:any) => {return data.map((elem:any) => new SlideShow(elem))}))
  }
}
