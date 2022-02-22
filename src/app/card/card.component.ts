import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('title') title = '';
  @Input('content') content: any;
  @Input('iconSrc') iconSrc = '';


  constructor() { }

  ngOnInit(): void {
  }

  isArrayContent(x: any) {
    return x instanceof Array;
  }

}
