import { Component, EventEmitter, Output } from '@angular/core';
import { Company } from 'workzone';
import { WorkZoneAdminService } from '../work-zone-admin.service';

@Component({
  selector: 'app-new-company-modal',
  templateUrl: './new-company-modal.component.html',
  styleUrls: ['./new-company-modal.component.css']
})
export class NewCompanyModalComponent {
   public showModal = false;
   company = new Company();

   @Output() hidePopup = new EventEmitter<void>();
 
   public showPopup() {
     this.showModal = true;
   }

   public closePopup() {
     this.showModal = false;
     this.hidePopup.emit();
   }

  
   errMessage:string='';
   constructor(private _serviceAdmin: WorkZoneAdminService){
  };

  public setCompany(f:Company){
    this.company=f
};


onFileSelected(event:any,fashion:Company) {
  let me = this;
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
  me.company.company_image=reader.result!.toString()
  };
  reader.onerror = function (error) {
  console.log('Error: ', error);
  };
  };
  

  postCompany()
  {
  this._serviceAdmin.postCompany(this.company).subscribe({
  next:(data)=>{this.company=data},
  error:(err)=>{this.errMessage=err}
  })
  alert('successfully')
  location.reload()
  }
  
   
}
