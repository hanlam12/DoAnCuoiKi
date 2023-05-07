import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WorkZoneService } from '../work-zone.service';

@Component({
  selector: 'app-homepage-employer',
  templateUrl: './homepage-employer.component.html',
  styleUrls: ['./homepage-employer.component.css']
})
export class HomepageEmployerComponent {
  isOn: boolean = true;

  status() {
    this.isOn = !this.isOn;
  }
  infor: boolean = true;
  change_infor: boolean = false;

  changeInfor() {
    this.infor = false;
    this.change_infor = true;
  }
  exist(){
    this.infor = true;
    this.change_infor = false;
  }
  companyId: string = '';
  companyData: any;
  errMessage:string='';
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

    this._Service.GetRecruit(this.companyId).subscribe({
    next:(data)=>{this.companyData=data},
    error:(err)=>{this.errMessage=err}
    })
  }
}


