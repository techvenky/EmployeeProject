import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { EmployeeComponent } from './employee.component';  
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';  
import { EmployeeListComponent } from './employee-list/employee-list.component';  
  
@NgModule({  
  declarations: [EmployeeComponent, EmployeeListComponent, EmployeeDetailComponent],  
  imports: [  
    CommonModule  
  ],  
  exports: [EmployeeComponent]  
})  
export class EmployeeModule { } 