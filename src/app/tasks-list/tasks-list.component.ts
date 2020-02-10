import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks:Task[];


  constructor(private contServ:TaskService) { }

  ngOnInit() {
    this.tasks=this.contServ.getAll();
  }

  delete(taskId:number){
    if(confirm(`Are you sure of deleting Task # ${taskId}`)){
      this.contServ.delete(taskId);
    }
  }
}
