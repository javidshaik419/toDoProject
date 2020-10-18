import { Component, OnInit } from '@angular/core';
import{ServiceService} from '../service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  
  todo:{}
  res={}
  details:[]

  constructor( private service:ServiceService ,private router:Router) { }

  ngOnInit(): void {
    this.getDetails()

  }

  onclick(){
    let query={
      todo:this.todo
    }
    this.service.add(query).subscribe((ress)=>{
      if(ress){
       
        this.res=ress['result'].todo
        window.location.reload() 
      }else{
        this.res=ress['msg']
      }
    })
   


    

  }
  getDetails(){
    this.service.gettodolist().subscribe((ress)=>{
      if(ress){
        this.details=ress['result']
        console.log("details",this.details)
      }
    })
  }
  ondelete(ci){
    let query={
      id:ci
    }
    console.log(query,"nnnn")
    this.service.delete(query).subscribe((ress)=>{
      if(ress){
        window.location.reload() 

        console.log("deleted")
      }
    })
  }


}
