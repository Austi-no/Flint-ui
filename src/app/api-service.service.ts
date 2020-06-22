import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flint } from './flint';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  // baseUrl: string = '/api'

  constructor(private http: HttpClient) { }


  getFlints() {
    return this.http.get<Flint[]>('http://localhost:8080/flints');
  }

  saveFlint(newFlint: Flint) {
    return this.http.post<Flint>('http://localhost:8080/addFlints', newFlint);
  }



}
