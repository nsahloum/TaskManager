import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from "../../Task";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  subscription!: Subscription;
  showAddTask!: boolean;
  text!: string;
  day!: string;
  reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe( value => this.showAddTask = value);
  }

  onSubmit() {
    if (!this.text) {
      alert('PLease add a task!');
      return;
    }
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

  }
}
