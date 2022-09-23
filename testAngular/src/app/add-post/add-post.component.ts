import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

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



  getData(){
    let table : any =JSON.parse(localStorage.getItem('blog')!) || [] ;
  let titre = this.blog.get('titre').value
  let description = this.blog.get('description').value
  let category = this.blog.get('category').value
  let date = Date()



  table.push({'titre':titre , 'description' : description , 'category' : category , 'date' : date})
    localStorage.setItem('blog' , JSON.stringify(table))
  }
}
