import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  addtoDos = environment.apiURL + "addtodo" 
  gettodo=environment.apiURL +'gettodo'
  dRecord=environment.apiURL+"deleteTodo"


  constructor(private http: HttpClient) { }
  
add(body){
  return this.http.post(this.addtoDos,body)
  
}
gettodolist(){
  return this.http.get(this.gettodo)
}
delete(body){
  return this.http.post(this.dRecord,body)
}

}
