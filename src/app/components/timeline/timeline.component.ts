import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrakingService } from 'src/app/service/traking.service';
import { find, get, pull } from 'lodash';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  details:any;
  arry =[];
  @ViewChild('tagInput') tagInputRef!: ElementRef;
  tags: string[] = ['html', 'Angular'];
  form!: FormGroup ;

  constructor(private trakingService:TrakingService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      tag: [undefined],
    });
    this.trakingService.getDetails().subscribe((data:any)=>{
      this.details = data[0];
      this.arry =data[0].itemHistoryTracking;
      console.log(data)
    })
  }
  focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.form.controls['tag'].value;
    if (event.code === 'Backspace' && !inputValue) {
      this.removeTag();
      return;
    } else {
      if (event.code === 'Comma' || event.code === 'Space') {
        this.addTag(inputValue);
        this.form.controls['tag'].setValue('');
      }
    }
  }

  addTag(tag: string): void {
    if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
      tag = tag.slice(0, -1);
    }
    if (tag.length > 0 && !find(this.tags, tag)) {
      this.tags.push(tag);
    }
  }

  removeTag(tag?: string): void {
    if (!!tag) {
      pull(this.tags, tag);
    } else {
      this.tags.splice(-1);
    }
  }

}
