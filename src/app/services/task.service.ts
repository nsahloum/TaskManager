import {Injectable} from '@angular/core';
import {TASKS} from "../mock-tasks";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(){
    return of(TASKS);
  }
}
