import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: User[];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
