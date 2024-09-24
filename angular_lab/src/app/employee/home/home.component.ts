import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  allEmp: Employee[] = []

  constructor(private empService: EmployeeService, private router: Router) {

  }
  formdata: Employee = {
    id: 0,
    name: '',
    age: 0,
    salary: 0
  }
  create() {
    this.empService.create(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(["employee/home"])
      },
      error: (er) => {
        console.log(er)
      }
    })
  }

  deleteItem(id:number){
    this.empService.delete(id).subscribe({
      next: (data) => {
        this.allEmp = this.allEmp.filter(_ => _.id != id)
      }
    })
  }

  ngOnInit(): void {
    this.empService.getAll().subscribe((data) => {
      this.allEmp = data;
    })

  }
}
