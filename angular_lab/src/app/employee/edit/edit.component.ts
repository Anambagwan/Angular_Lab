import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModule } from '../employee.module';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{
  ngOnInit(): void {
   this.route.paramMap.subscribe((s) => {
    let id = Number(s.get('id'))
    this.getByid(id)
   })
  }
  formdata: Employee = {
    id: 0,
    name: '',
    age: 0,
    salary: 0
  }
  getByid(id: number){
    this.employeeService.edit(id).subscribe((data) => {
      this.formdata = data;
    })
  }
  constructor(private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ){
  }

  update(){
    this.employeeService.create(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(["employee/home"])
      },
      error: (er) => {
        console.log(er)
      }
    })
  }

  

}
