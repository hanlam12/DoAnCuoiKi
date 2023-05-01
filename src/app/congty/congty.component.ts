import { Component, AfterViewInit, OnInit } from '@angular/core';

import { Company } from 'workzone';
import { WorkZoneService } from '../work-zone.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-congty',
  templateUrl: './congty.component.html',
  styleUrls: ['./congty.component.css']
})
export class CongtyComponent  {
  companyId: string =''
  companyData: any
  errMessage:string='';

  constructor(
    private route: ActivatedRoute,
    private companyService: WorkZoneService
  ) {
    this.route.params.subscribe(
      (params: Params) => {
         this.companyId = params['company_id'];
      }
   );

    this.companyService.getCompany(this.companyId).subscribe({
    next:(data)=>{this.companyData=data},
    error:(err)=>{this.errMessage=err}
    })
  }
}
