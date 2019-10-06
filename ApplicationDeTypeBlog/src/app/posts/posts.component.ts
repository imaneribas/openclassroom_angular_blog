import { Component, OnInit, Input } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() postnumber:String;
  @Input() datenumber:Date;
  @Input() paragraphe:String;
  @Input() lovestatus:number;
  @Input() dislovestatus:number;

   incrementlike:number;
   decrementlike:number;
  constructor() { }

  ngOnInit() {
  }

  increment(){
    this.lovestatus++;
    console.log("boutton like it:",this.lovestatus);
  }
  
  decrement(){
    this.dislovestatus++;
    console.log("boutton dislike it:",this.dislovestatus);
  }

}
