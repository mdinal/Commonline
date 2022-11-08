import { Component, OnInit } from '@angular/core';
import { faCoffee, faLaptop,faUsers,faUserGraduate,faTrophy} from '@fortawesome/free-solid-svg-icons';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TimelineComponent } from '../timeline/timeline.component';
@Component({ 
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {
  faCoffee = faCoffee;
  faLaptop = faLaptop;
  faUsers = faUsers;
  faUserGraduate = faUserGraduate;
  faTrophy = faTrophy;
  trackingId: any;
  constructor(config: NgbCarouselConfig, private modalService: NgbModal) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
   }
   images = [
    {title: 'First Slide', short: 'First Slide Short', src: "../../../assets/images/header.jpeg"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "../../../assets/about_image.png"},
  ];
  ngOnInit(): void {
  }
  search(e:any){
    
    const modalRef = this.modalService.open(TimelineComponent,{ centered: true });
    console.log(this.trackingId);
  }
}
