import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {

   }

  getAll(){
    return this.httpClient.get<Employee[]>('http://localhost:3000/employee');
  }

  create(data: Employee){
    return this.httpClient.post('http://localhost:3000/employee',data);
  }
  edit(id: number){
    return this.httpClient.get<Employee>(`http://localhost:3000/employee/${id}`);
  }
  update(data: Employee){
    return this.httpClient.put<Employee>(`http://localhost:3000/employee/${data.id}`, data);
  }
  delete(id: number){
    return this.httpClient.get<Employee>(`http://localhost:3000/employee/${id}`);
  }

}
