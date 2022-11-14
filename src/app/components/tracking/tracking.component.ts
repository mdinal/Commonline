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
  items = ['Javascript', 'Typescript'];

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
    {title: 'First Slide', short: 'First Slide Short', src: "../../../assets/bg/01.jpg"},
    {title: 'First Slide', short: 'First Slide Short', src: "../../../assets/bg/02.jpg"},
    {title: 'First Slide', short: 'First Slide Short', src: "../../../assets/bg/03.jpg"},
    {title: 'First Slide', short: 'First Slide Short', src: "../../../assets/bg/04.jpg"},
    {title: 'First Slide', short: 'First Slide Short', src: "../../../assets/bg/05.jpg"},
  ];
  ngOnInit(): void {
  }
  search(e:any){
    
    const modalRef = this.modalService.open(TimelineComponent,{ centered: true });
    console.log(this.trackingId);
  }
}
