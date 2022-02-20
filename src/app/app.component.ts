import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  taskName: string = '';
  tasks: string[] = [];

  onChange(name: string): void {
    this.taskName = name;
  }

  onAdd(): void {
    this.tasks.push(this.taskName);
    this.taskName = '';
  }
}
