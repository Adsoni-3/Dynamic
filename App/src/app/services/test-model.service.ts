import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { TestModel } from '../models/test-model';

const baseUrl = 'http://localhost:8080/api/testModel';

@Injectable({
  providedIn: 'root'
})
export class TestModelService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  getAll(): Observable<TestModel[]> {
    return this.http.get<TestModel[]>(baseUrl);
  } 
  get(id: any): Observable<TestModel> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  findByTitle(title: any): Observable<TestModel[]> {
    return this.http.get<TestModel[]>(`${baseUrl}?title=${title}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  update(id:any,data:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
