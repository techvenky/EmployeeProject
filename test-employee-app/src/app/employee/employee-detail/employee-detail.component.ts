import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';  
import { Employee } from 'src/app/shared/interfaces';  
import { BsModalRef } from 'ngx-bootstrap/modal';  
  
@Component({  
  selector: 'app-employee-detail',  
  templateUrl: './employee-detail.component.html',  
  styleUrls: ['./employee-detail.component.css'],  
  changeDetection: ChangeDetectionStrategy.OnPush  
})  
  
export class EmployeeDetailComponent implements OnInit {  
  
@Input() public employee: Employee;  
  
constructor(public bsModalRef: BsModalRef) { }  
  
  ngOnInit(): void {  
  }
}  