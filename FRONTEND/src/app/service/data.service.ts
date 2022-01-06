import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpCilent:HttpClient) { }
  getData(){
    return this.httpCilent.get('http://127.0.0.1:8000/api/employees');
  }
  insertData(data:Employee){
    return this.httpCilent.post('http://127.0.0.1:8000/api/addEmployee',data);
  }
  deleteData(id:any){
    return this.httpCilent.delete('http://127.0.0.1:8000/api/deleteEmployee/'+id);
  }
  getEmployeeById(id:any){
    return this.httpCilent.get('http://127.0.0.1:8000/api/employee/'+id);
  }
  updateData(id:any,data:Employee){
    return this.httpCilent.put('http://127.0.0.1:8000/api/updateEmployee/'+id,data);
  }
}
