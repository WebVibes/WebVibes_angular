import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input('mainText') mainText = '';
  @Input('secondaryText') secondaryText = '';
  @Input('imageSrc') imageSrc = '';


  constructor() { }

  ngOnInit(): void {
  }

}
