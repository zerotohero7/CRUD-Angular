import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  identite : any;

  constructor(private fb : FormBuilder, private activeRue : ActivatedRoute) {
    this.identite  = Number( this.activeRue.snapshot.paramMap.get('id')) -1

    this.blog.get('titre').value = JSON.parse(localStorage.getItem('blog')!)[this.identite].titre
     this.blog.get('description').value= JSON.parse(localStorage.getItem('blog')!)[this.identite].description
     this.blog.get('category').value= JSON.parse(localStorage.getItem('blog')!)[this.identite].category

  }

  ngOnInit(): void {
  }



  blog :any = this.fb.group({
    titre : ['' , Validators.required],
    description : ['' ,Validators.required],
    category : ['' ,  Validators.required]
  })


  public get titre()  {
    return this.blog.get('titre')
  }
  public get description() {
    return this.blog.get('description')
  }
  public get category() {
    return this.blog.get('category')
  }



  upDate(){
    let table : any =JSON.parse(localStorage.getItem('blog')!) || [] ;
  let titre = this.blog.get('titre').value
  let description = this.blog.get('description').value
  let category = this.blog.get('category').value
  let date = Date()



  table.splice(this.identite,1,{'titre':titre , 'description' : description , 'category' : category , 'date' : date})
    localStorage.setItem('blog' , JSON.stringify(table))
  }

}
