import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {


  constructor(private http : HttpClient) { }

  login(data)
  {
    return this.http.post<{ token:string }>('http://localhost:8000/user/login',data);
  }

  submitImage(data)
  {
    return this.http.post<{ message:string, imagePath:string }>('http://localhost:8000/image/generate-thumbnail',data)
  }
}
