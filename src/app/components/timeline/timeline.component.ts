import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrakingService } from 'src/app/service/traking.service';
import { find, get, pull } from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  ids= [];
  passcode:any;
  details:any;
  arry =[];
  @ViewChild('tagInput') tagInputRef!: ElementRef;
  tags: string[] = ['html', 'Angular'];
  form!: FormGroup ;
  number:any;
  @ViewChild('content', { static: false }) private content:any;

  constructor(private trakingService:TrakingService,private fb: FormBuilder,private modalService: NgbModal) {
   }

  ngOnInit(): void {
    this.ids.forEach((e)=>{
      this.number =this.number+""+e+","
    })
    this.trakingService.getDetails(this.ids[0],this.passcode).subscribe((data:any)=>{
      this.details = data[0];
      this.arry =data[0].itemHistoryTracking;
      console.log(data)
    },(err)=>{
      this.modalService.dismissAll();
    })
  }
}
