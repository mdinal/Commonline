import { Component, OnInit } from '@angular/core';
import { TrakingService } from 'src/app/service/traking.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  details:any;
  arry =[];
  constructor(private trakingService:TrakingService) { }

  ngOnInit(): void {
    this.trakingService.getDetails().subscribe((data:any)=>{
      this.details = data[0];
      this.arry =data[0].itemHistoryTracking;
      console.log(data)
    })
  }

}
