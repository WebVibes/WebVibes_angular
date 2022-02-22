import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-your-job',
  templateUrl: './service-your-job.component.html',
  styleUrls: ['./service-your-job.component.css']
})
export class ServiceYourJobComponent implements OnInit {

  @Input('yourJobText') yourJobText = '';
  @Input('priceText') priceText = '';
  @Input('descriptionText') descriptionText = '';
  @Input('imageSrc') imageSrc = '';

  constructor() { }

  ngOnInit(): void {
  }

}
