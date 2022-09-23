import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }



  data : any = JSON.parse(localStorage.getItem('blog')!)


  modifier(id : number){
    this.route.navigate(['/update' , id])
  }

  delete(x : any){
   this.data.splice(x,1)
   localStorage.setItem('blog',JSON.stringify(this.data))
  }
}
