import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName  } from '@angular/forms';
import { BaseService } from '../services/base.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-thumb-nail',
  templateUrl: './thumb-nail.component.html',
  styleUrls: ['./thumb-nail.component.less']
})
export class ThumbNailComponent implements OnInit {
  imageForm;
  image
  constructor(private _base: BaseService, private router:Router) { }

  ngOnInit() {
    this.imageForm = new FormGroup({
      imageUrl : new FormControl('')
    });
  }

  submit()
  {
    this._base.submitImage(this.imageForm.value).subscribe(res=>{
      console.log(res);
      this.image = document.getElementById('image');
      this.image.style.display='block';
      console.log(this.image.style.display);
      this.image.src = res.imagePath;
      console.log(this.image.src);
    })
  }



}
