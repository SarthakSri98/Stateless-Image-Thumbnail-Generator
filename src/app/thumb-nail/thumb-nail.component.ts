import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormControlName  } from '@angular/forms';
import { BaseService } from '../services/base.service';
import { Router } from '@angular/router';
import { applyOperation } from 'fast-json-patch'


@Component({
  selector: 'app-thumb-nail',
  templateUrl: './thumb-nail.component.html',
  styleUrls: ['./thumb-nail.component.less']
})
export class ThumbNailComponent implements OnInit {
  jsonpatch = require('fast-json-patch')
  imageForm;
  image;
  thumbNail;
  imagePath:string="#";
  constructor(private _base: BaseService, private router:Router) { }

  ngOnInit() {
    this.imageForm = new FormGroup({
      imageUrl : new FormControl('')
    });
  }

  submit()
  {
    var doc = this.imageForm.value;
var patch = [
  { op: "add", path: "/token", value: localStorage.getItem('token') },
];
doc = this.jsonpatch.applyPatch(doc, patch).newDocument;

    this._base.submitImage(doc).subscribe(res=>{
      console.log(res);
      this.image = document.getElementById('image');
      this.thumbNail = document.getElementById('thumbNail');
      this.thumbNail.style.display='block';
      this.imagePath = res.imagePath;
    },(error) => {
      console.log(error);
    })
  }



}
