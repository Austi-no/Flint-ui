import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {



  constructor(private http: HttpClient) { }


  getFlints() {
    return this.http.get('/flints');
  }

  saveFlint(newFlint: any): any {
    return this.http.post('/addFlints', newFlint);
  }

  deleteFlint(id: any) {
    return this.http.delete('/deleteFlint/' + id);
  }



}
