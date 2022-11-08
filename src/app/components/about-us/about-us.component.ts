import { Component, OnInit } from '@angular/core';
import { faCheck, faCaretRight, faAngleRight, faBookReader, faChalkboardTeacher, faSchool, faAward} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faCheck = faCheck;
  faCaretRight = faCaretRight;
  faAngleRight = faAngleRight;
  faBookReader = faBookReader;
  faChalkboardTeacher = faChalkboardTeacher;
  faSchool = faSchool;
  faAward = faAward;

  teachers= [
    {'id':1,'fname':'','lname':'SRI','subject':'Asian Silk Route Private Limited','img':'../../assets/PARTNER/asian silk route logo.jpg'},
    {'id':2,'fname':'MICHELLE','lname':'ANNE','subject':'Jetgoo Logistics Private Limited','img':'../../assets/PARTNER/jetgoo.jpg'},
    {'id':3,'fname':'MALIK','lname':'DOE','subject':'Wells Digital Infrastructure Private Limited','img':'../../assets/PARTNER/SF EXPRESS INT LOGO.png'},
    {'id':4,'fname':'JAKSON','lname':'SILVA','subject':'Wonder Ceylon Investment private limited','img':'../../assets/PARTNER/venco logo.png'},   
  ];
}
