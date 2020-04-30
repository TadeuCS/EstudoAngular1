import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Output() clear =new EventEmitter<any>();

  @Input('userName') name: string;

  constructor() { }

  ngOnInit(): void {
  }

  clickClear(){
    this.clear.emit();
  }
}
