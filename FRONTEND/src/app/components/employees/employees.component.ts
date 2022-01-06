import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: any;
  employee = new Employee();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }
  getEmployeeData() {
    //console.log('hello employees');
    this.dataService.getData().subscribe(res => {
      console.log(res);
      this.employees = res;
    });
  }
  insertData() {
    this.dataService.insertData(this.employee).subscribe(res => {
      // console.log(res);
      this.getEmployeeData();
    })

  }
  deleteData(id:any){
    // console.log(id);
    this.dataService.deleteData(id).subscribe(res => {
      this.getEmployeeData();
    })
  }
 

}
