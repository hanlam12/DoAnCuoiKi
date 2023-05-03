import { Component } from '@angular/core';
  import { ActivatedRoute, Params, Router } from '@angular/router';
  import { WorkZoneService } from '../work-zone.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Company, Job } from 'workzone';

  @Component({
    selector: 'app-recruitment',
    templateUrl: './recruitment.component.html',
    styleUrls: ['./recruitment.component.css']
  })
  export class RecruitmentComponent {
    public regForm: FormGroup = new FormGroup ({
      job_name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      address:  new FormControl('',Validators.required),
      salary:  new FormControl('',Validators.required),
      exprience:  new FormControl('',Validators.required),
      dealine:  new FormControl('',Validators.required),
      welfare:  new FormControl('',Validators.required),
      description:  new FormControl('',Validators.required),
      job_requirement:  new FormControl('',Validators.required),
      contact_person: new FormControl('',Validators.required),
      phone_person: new FormControl('',Validators.required),
      degree: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required),
      position: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      recruiting_amount: new FormControl('',Validators.required),
      work_form: new FormControl('',Validators.required),
    })
    companyId: string = '';
    companyData: any;
    errMessage:string='';
    job: any = {};
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private _Service: WorkZoneService,
    ) {
      this.route.params.subscribe(
        (params: Params) => {
          this.companyId = params['company_id'];
        }
    );

      this._Service.getcompany(this.companyId).subscribe({
      next:(data)=>{this.companyData=data},
      error:(err)=>{this.errMessage=err}
      })
    }

    onCancel() {
      this.regForm.reset();
    }

    onSubmit() {
      const jobData = this.regForm.value;
      this.companyData.company_id = this.companyId;
      this._Service.addJob(jobData, this.companyId).subscribe(() => {
        // Thêm công việc thành công
        this.router.navigate(['/hompageEmployer'], { queryParams: { company: JSON.stringify(this.companyData) } });
      }, error => {
        console.log(error);
      });
    }
  }


