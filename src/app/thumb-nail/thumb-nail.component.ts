import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormControlName
} from '@angular/forms';
import {
  BaseService
} from '../services/base.service';
import {
  Router
} from '@angular/router';
import {
  applyOperation
} from 'fast-json-patch'
import {
  MatSnackBar
} from '@angular/material/snack-bar';


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
  caption;
  imagePath: string = "https://www.collectcent.com/blog/img/loader.gif";
  message: string = "User not authorised";
  constructor(private _base: BaseService, private router: Router, private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.imageForm = new FormGroup({
      imageUrl: new FormControl('')
    });
  }

  submit() {
    this.thumbNail = document.getElementById('thumbNail');
    this.thumbNail.style.display = 'block';
    var doc = this.imageForm.value;
    var patch = [{
      op: "add",
      path: "/token",
      value: localStorage.getItem('token')
    }, ];
    doc = this.jsonpatch.applyPatch(doc, patch).newDocument;

    this._base.submitImage(doc).subscribe(res => {
      this.message = res.message;
      this.image = document.getElementById('image');
      this.image.classList.add("image");
      this.imagePath = res.imagePath;
      document.getElementById("caption").style.display = "block";
    }, (error) => {
      this.snackbar.open(this.message, '', {
        duration: 5000
      });
    })
  }



}
