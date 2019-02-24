import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  like: number = 0;
  dislike: number = 0;
  loveIts: number = 0;

  @Input() title: string;
  @Input() content: string; 
  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }

  onAddLike(){
    return this.like++;
  }

  onAddDislike(){
    return this.dislike++;
  } 

  onAddView(avis: number){
    if(avis == 0){
      this.loveIts++;
    } else {
      this.loveIts--;
    }
  }

}
