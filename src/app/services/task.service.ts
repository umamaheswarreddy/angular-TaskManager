import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks:Task[];
  constructor() {
    this.tasks=[
      {taskID:101,taskName:"java",startDate:new Date("2019-01-01"),endDate:new Date("2020-01-01")},
      {taskID:102,taskName:"mysql",startDate:new Date("2018-03-05"),endDate:new Date("2019-01-01")},
      {taskID:103,taskName:"angular",startDate:new Date("2017-03-05"),endDate:new Date("2020-01-01")}
    ];
   }
   getAll():Task[]{
     return this.tasks;
   }
   get(id:number){
     return this.tasks.find((c)=>(c.taskID==id));
   }
   add(task:Task){
     this.tasks.push(task);
   }
   update(task:Task){
    let index=this.tasks.findIndex((c)=>(c.taskID===task.taskID));
    if(index>-1){
      this.tasks[index]=task;
    }
   }
   delete(id:number){
     let index=this.tasks.findIndex((contact)=>(contact.taskID===id));
     if(index>-1){
      this.tasks.splice(index,1);
    }
   }
}
