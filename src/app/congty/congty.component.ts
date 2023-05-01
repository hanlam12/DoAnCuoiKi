import { Component, AfterViewInit, OnInit } from '@angular/core';

import { Company } from 'workzone';
import { WorkZoneService } from '../work-zone.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-congty',
  templateUrl: './congty.component.html',
  styleUrls: ['./congty.component.css']
})
export class CongtyComponent implements OnInit {


  

  // company: Company | undefined;

  // constructor(
  //   private route: ActivatedRoute,
  //   private companyService: WorkZoneService
  // ) { }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   if (id) {
  //     this.companyService.getCompany(id).subscribe(company => {
  //       this.company = company;
  //     });
  //   }
  // }


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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
